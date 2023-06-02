const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const token = req.cookies.user;

  if (!token) {
    res.json({
      success: false,
      message: "User is not logged in",
    });
    return;
  }

  try {
    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");

    res.json({
      success: true,
      message: "User is logged in"
    });
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.json({
        success: false,
        message: "Token has expired",
      });
    } else {
      res.json({
        success: false,
        message: "Invalid token",
      });
    }
  }
};
