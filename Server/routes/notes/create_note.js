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
  const tags = req.body.tags; // Array of tags
  const categories = req.body.categories; // Array of categories

  // Establish the connection
  const connection = global.connection;

  // Insert tags into the 'tags' table (ignore if already exists)
  const insertTagQuery = "INSERT IGNORE INTO tags (name) VALUES ?";
  const tagValues = tags.map((tag) => [tag]);

  const insertTags = new Promise((resolve, reject) => {
    connection.query(insertTagQuery, [tagValues], (err, tagResult) => {
      if (err) {
        console.error("Error inserting tags:", err);
        reject(err);
      } else {
        // Get the inserted tag ID
        const insertedTagId = tagResult.insertId;
  
        // Insert categories into the 'categories' table (ignore if already exists)
        const insertCategoryQuery = "INSERT IGNORE INTO categories (name) VALUES ?";
        const categoryValues = categories.map((category) => [category]);
  
        connection.query(insertCategoryQuery, [categoryValues], (err, categoryResult) => {
          if (err) {
            console.error("Error inserting categories:", err);
            reject(err);
          } else {
            // Get the inserted category ID
            const insertedCategoryId = categoryResult.insertId;
  
            // Insert the note into the 'notes' table
            const insertNoteQuery = `INSERT INTO notes (user_id, title, description, latitude, longitude, created_at, priority, reminder) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const noteValues = [
              userId,
              title,
              description,
              latitude,
              longitude,
              createDate,
              priority,
              reminder,
            ];
  
            connection.query(insertNoteQuery, noteValues, (err, noteResult) => {
              if (err) {
                console.error("Error creating note:", err);
                return res.status(500).json({
                  success: false,
                  data: null,
                  error: "An error occurred while creating the note.",
                });
              }
  
              const createdNoteId = noteResult.insertId;
  
              // Create the row in the 'note_tags' table
              const insertNoteTagQuery =
                "INSERT INTO note_tags (note_id, tag_id) VALUES ?";
              const noteTagValues = [[createdNoteId, insertedTagId]];
              connection.query(insertNoteTagQuery, [noteTagValues], (err) => {
                if (err) {
                  console.error("Error creating note tags:", err);
                  return res.status(500).json({
                    success: false,
                    data: null,
                    error: "An error occurred while creating the note.",
                  });
                }
  
                // Create the row in the 'note_categories' table
                const insertNoteCategoryQuery =
                  "INSERT INTO note_categories (note_id, category_id) VALUES ?";
                const noteCategoryValues = [[createdNoteId, insertedCategoryId]];
                connection.query(insertNoteCategoryQuery, [noteCategoryValues], (err) => {
                  if (err) {
                    console.error("Error creating note categories:", err);
                    return res.status(500).json({
                      success: false,
                      data: null,
                      error: "An error occurred while creating the note.",
                    });
                  }
  
                  // Handle the success case
                  res.status(200).json({
                    success: true,
                    data: { noteId: createdNoteId },
                    error: null,
                  });
                });
              });
            });
  
            resolve({ insertedTagId, insertedCategoryId });
          }
        });
      }
    });
  }).catch((error) => {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      data: null,
      error: "An error occurred while creating the note.",
    });
  });
});

module.exports = router;
