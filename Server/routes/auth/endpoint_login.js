const mysql = require("mysql2");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const usernameOrEmail = req.body.usernameOrEmail;
  const password = req.body.password;

  var sql = mysql.format("SELECT * FROM users WHERE username = ? OR email = ?", [
    usernameOrEmail,
    usernameOrEmail,
  ]);
  console.log("DEBUG: /basic/login => " + sql);
  connection.query(sql, async (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    numRows = rows.length;
    if (numRows == 0) {
      res.json({
        success: false,
        message: "Username or Email not found in the system",
      });
    } else {
      const valid = await bcrypt.compare(password, rows[0].hashed_password);

      if (valid) {
        const token = jwt.sign(
          {
            userId: rows[0].id,
          },
          "ZJGX1QL7ri6BGJWj3t",
          { expiresIn: "1h" }
        );
        res.cookie("user", token); // Set the "user" cookie with the token

        res.json({
          success: true,
          message: "Login credential is correct",
        });
      } else {
        res.json({
          success: false,
          message: "Login credential is incorrect",
        });
      }
    }
  });
};
