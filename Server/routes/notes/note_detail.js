const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/notedetail", (req, res) => {
  const token = req.cookies.user; // Assuming the JWT token is stored in a cookie
  const jwtSecret = "ZJGX1QL7ri6BGJWj3t"; // Your JWT secret
  const id = req.query.noteid;

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
  const sqlSelectTag =
    "SELECT tags.name FROM tags JOIN note_tags ON tags.id = note_tags.tag_id WHERE note_tags.note_id = ?";
  const sqlSelectCat =
    "SELECT categories.name FROM categories JOIN note_categories ON categories.id = note_categories.category_id WHERE note_categories.note_id = ?";
  const sqlSelect = "SELECT * FROM notes WHERE user_id = ? AND id = ?";
  connection.query(sqlSelect, [userId, id], (err, results) => {
    if (err) {
      res.json(error);
    } else {
      if (results.length > 0) { // Check if results array is not empty
        connection.query(sqlSelectTag, [id], (err, tagResults) => {
          if (err) {
            res.json(error);
          } else {
            console.log(tagResults)
            const tags = tagResults.map((row) => row.name);
            results[0].Tags = tags; // Add the tags array to the results object
  
            connection.query(sqlSelectCat, [id], (err, catResults) => {
              if (err) {
                res.json(error);
              } else {
                const categories = catResults.map((row) => row.name);
                results[0].Categories = categories; // Add the categories array to the results object
                console.log(results)
                return res.json(results);
              }
            });
          }
        });
      } else {
        return res.status(404).json({
          success: false,
          data: null,
          error: "Note not found.",
        });
      }
    }
  });
});  
module.exports = router;
