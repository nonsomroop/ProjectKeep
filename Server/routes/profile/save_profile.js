const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.patch("/", (req, res) => {
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

  const { username, first_name, last_name, profilePic, email, about_me } = req.body;
  const updated_at = new Date();

  const sqlQuery = `UPDATE users SET username=?, first_name=?, last_name=?, profilePic=?, email=?, about_me=?, updated_at=? WHERE id=?`;
  const values = [username, first_name, last_name, profilePic, email, about_me, updated_at, userId];

  connection.query(sqlQuery, values, (error, results) => {
    if (error) {
      console.error("Error updating profile:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to update profile",
        error: error.message,
      });
    }
    res.json({
      success: true,
      message: "Profile updated successfully",
    });
  });
});

module.exports = router;
