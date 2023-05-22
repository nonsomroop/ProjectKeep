const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/showprofile", (req, res) => {
  const token = req.cookies.user;
  const jwtSecret = "ZJGX1QL7ri6BGJWj3t";
  
  if (!token) {
    res.json({
      success: false,
      message: "Please login again",
    });
    return;
  }
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

  const sqlSelect = "SELECT first_name, last_name, profilePic, email, username FROM users WHERE id = ?";
  connection.query(sqlSelect, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "User not found.",
      });
    }

    const user = results[0];
    return res.json({
      success: true,
      data: user,
    });
  });
});

module.exports = router;