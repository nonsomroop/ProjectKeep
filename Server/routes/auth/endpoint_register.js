const mysql = require("mysql2");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;

  const salt1 = await bcrypt.genSalt(10);
  console.log("Salt #1: ", salt1);
  const hash1 = await bcrypt.hash(password, salt1);
  console.log("Hash #1: ", hash1);

  var sql = mysql.format(
	"INSERT INTO users (username, hashed_password, first_name, last_name, email, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
	[username, hash1, firstname, lastname, email, new Date(), new Date()]
  );
  

  connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }
    res.json({
      success: true,
      message: "User has been created",
    });
  });
};
