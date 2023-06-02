const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.put("/", async (req, res) => {
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

  const password = req.body.password;

  try {
    const salt1 = await bcrypt.genSalt(10);
    console.log("Salt #1: ", salt1);
    const hash1 = await bcrypt.hash(password, salt1);
    console.log("Hash #1: ", hash1);

    const updatePassword = "UPDATE users SET hashed_password = ? WHERE id = ?";
    const hashPassword = [hash1, userId];

    connection.query(updatePassword, hashPassword, (err, result) => {
      if (err) {
        console.error("Error updating password:", err);
        return res.status(500).json({
          success: false,
          data: null,
          error: "An error occurred while updating the password.",
        });
      }

      return res.status(200).json({
        success: true,
        data: result,
        error: null,
      });
    });
  } catch (err) {
    console.error("Error hashing password:", err);
    return res.status(500).json({
      success: false,
      data: null,
      error: "An error occurred while hashing the password.",
    });
  }
});

module.exports = router;
