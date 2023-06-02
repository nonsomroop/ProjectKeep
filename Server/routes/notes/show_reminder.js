const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/showreminder", (req, res) => {
  const token = req.cookies.user; // Assuming the JWT token is stored in a cookie
  const jwtSecret = "ZJGX1QL7ri6BGJWj3t"; // Your JWT secret

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
  const sqlSelect = "SELECT * FROM notes WHERE user_id = ?";
  connection.query(sqlSelect, [userId], (err, results) => {
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      return res.json(results);
    }
  });
});

module.exports = router;

