const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const token = req.cookies.user; // Assuming the JWT token is stored in a cookie
  const jwtSecret = "ZJGX1QL7ri6BGJWj3t"; // Your JWT secret

  // Verify the JWT token and extract the userId
  let userId;

  try {
    const decoded = jwt.verify(token, jwtSecret);
    userId = decoded.userId;
  } catch (err) {
    console.error("Error decoding JWT:", err);
    return res.status(401).json({
      success: false,
      data: null,
      error: "Unauthorized: Invalid token.",
    });
  }

  const title = req.body.title;
  const description = req.body.description;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const createDate = req.body.createDate;
  const priority = req.body.selectedPriority;
  const reminder = req.body.reminder;
  const content = req.body.detail;
  const tags = req.body.tags; // Array of tags
  const categories = req.body.categories; // Array of categories
  // Establish the connection
  const connection = global.connection;

  // Insert tags into the 'tags' table (ignore if already exists)
  const insertTagQuery = "INSERT IGNORE INTO tags (name) VALUES (?)";
  const checkTags = "SELECT id FROM tags WHERE name = ?";
  const tagIdSet = [];

  const tagTableCheck = tags.map((tag) => {
    return new Promise((resolve, reject) => {
      connection.query(checkTags, [tag], (err, tagCheckResult) => {
        if (err) {
          console.error("Error in checking tags:", err);
          reject(err);
        } else {
          if (tagCheckResult.length > 0) {
            resolve(tagCheckResult[0].id);
          } else {
            connection.query(insertTagQuery, [[tag]], (err, tagResult) => {
              if (err) {
                console.log("Error in inserting tags:", err);
                reject(err);
              } else {
                resolve(tagResult.insertId);
              }
            });
          }
        }
      });
    });
  });

  Promise.all(tagTableCheck)
    .then((results) => {
      tagIdSet.push(...results);

      const insertCategoryQuery =
        "INSERT IGNORE INTO categories (name) VALUES (?)";
      const checkCategories = "SELECT id FROM categories WHERE name = ?";
      const categoryIdSet = [];

      const categoryTableCheck = categories.map((category) => {
        return new Promise((resolve, reject) => {
          connection.query(
            checkCategories,
            [category],
            (err, categoryCheckResult) => {
              if (err) {
                console.error("Error in checking categories:", err);
                reject(err);
              } else {
                if (categoryCheckResult.length > 0) {
                  resolve(categoryCheckResult[0].id);
                } else {
                  connection.query(
                    insertCategoryQuery,
                    [category],
                    (err, categoryResult) => {
                      if (err) {
                        console.log(
                          "Error in inserting categories:",
                          err
                        );
                        reject(err);
                      } else {
                        resolve(categoryResult.insertId);
                      }
                    }
                  );
                }
              }
            }
          );
        });
      });

      Promise.all(categoryTableCheck)
        .then((results) => {
          categoryIdSet.push(...results);

          const insertNoteQuery = `INSERT INTO notes (user_id, title, description, latitude, longitude, created_at, priority, reminder, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
          const noteValues = [
            userId,
            title,
            description,
            latitude == "" ? null : latitude,
            longitude == "" ? null : longitude,
            createDate == "" ? "0000-00-00" : createDate,
            priority,
            reminder == "" ? "0000-00-00" : reminder,
            content,
          ];

          connection.query(
            insertNoteQuery,
            noteValues,
            (err, noteResult) => {
              if (err) {
                console.error("Error creating note:", err);
                return res.status(500).json({
                  success: false,
                  data: null,
                  error: "An error occurred while creating the note.",
                });
              } else {
                const note_id = noteResult.insertId;
                const addTags = tagIdSet.map((tag_id) => {
                  return new Promise((resolve, reject) => {
                    connection.query(
                      "INSERT INTO note_tags (note_id, tag_id) VALUE(?, ?)",
                      [note_id, tag_id],
                      (err, result) => {
                        if (err) {
                          reject(err);
                        } else {
                          resolve(result);
                        }
                      }
                    );
                  });
                });

                const addCategories = categoryIdSet.map((category_id) => {
                  return new Promise((resolve, reject) => {
                    connection.query(
                      "INSERT INTO note_categories (note_id, category_id) VALUE(?, ?)",
                      [note_id, category_id],
                      (err, result) => {
                        if (err) {
                          reject(err);
                        } else {
                          resolve(result);
                        }
                      }
                    );
                  });
                });

                // Wait for all queries to finish before ending
                Promise.all([...addTags, ...addCategories])
                  .then(() => {
                    // All queries completed successfully
                    return res.status(200).json({
                      success: true,
                      message: "Note created successfully.",
                    });
                  })
                  .catch((error) => {
                    // An error occurred during one of the queries
                    console.error(
                      "Error creating tags or categories:",
                      error
                    );
                    return res.status(500).json({
                      success: false,
                      data: null,
                      error:
                        "An error occurred while creating tags or categories.",
                    });
                  });
              }
            }
          );
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});

module.exports = router;
