const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.delete("/:noteId", (req, res) => {
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

  const noteId = req.params.noteId;
  // Establish the connection
  const connection = global.connection;

  // Delete associated tags from the 'note_tags' table
  const deleteNoteTagsQuery = "DELETE FROM note_tags WHERE note_id = ?";
  // Delete associated categories from the 'note_categories' table
  const deleteNoteCategoriesQuery = "DELETE FROM note_categories WHERE note_id = ?";
  // Delete the note from the 'notes' table
  const deleteNoteQuery = "DELETE FROM notes WHERE id = ?";

  connection.beginTransaction((err) => {
    if (err) {
      console.error("Error starting transaction:", err);
      return res.status(500).json({
        success: false,
        data: null,
        error: "An error occurred while deleting the note.",
      });
    }

    connection.query(deleteNoteTagsQuery, [noteId], (err) => {
      if (err) {
        console.error("Error deleting note tags:", err);
        connection.rollback(() => {
          res.status(500).json({
            success: false,
            data: null,
            error: "An error occurred while deleting the note.",
          });
        });
      } else {
        connection.query(deleteNoteCategoriesQuery, [noteId], (err) => {
          if (err) {
            console.error("Error deleting note categories:", err);
            connection.rollback(() => {
              res.status(500).json({
                success: false,
                data: null,
                error: "An error occurred while deleting the note.",
              });
            });
          } else {
            connection.query(deleteNoteQuery, [noteId], (err) => {
              if (err) {
                console.error("Error deleting note:", err);
                connection.rollback(() => {
                  res.status(500).json({
                    success: false,
                    data: null,
                    error: "An error occurred while deleting the note.",
                  });
                });
              } else {
                connection.commit((err) => {
                  if (err) {
                    console.error("Error committing transaction:", err);
                    connection.rollback(() => {
                      res.status(500).json({
                        success: false,
                        data: null,
                        error: "An error occurred while deleting the note.",
                      });
                    });
                  } else {
                    res.status(200).json({
                      success: true,
                      data: null,
                      message: "Note deleted successfully.",
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  });
});

module.exports = router;
