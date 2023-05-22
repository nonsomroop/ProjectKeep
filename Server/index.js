const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_17ottx",
  password: "dYXfBZm3BrO8YqZE",
  database: "lab_blank01_173zpqo",
});

connection.connect(() => {
  console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;

// Enable CORS for requests from http://localhost:5173
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// Register endpoints
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.post("/login", require("./routes/auth/endpoint_login"));
app.post("/register", require("./routes/auth/endpoint_register"));
app.get("/check", require("./routes/auth/endpoint_check_login"));

// Use the createNoteRouter for the /create-note endpoint
app.use("/create-note", require("./routes/notes/create_note"));
app.get("/shownote", require("./routes/notes/show_note"))
app.get("/notedetail", require("./routes/notes/note_detail"));
//profile
app.get("/showprofile", require("./routes/profile/show_profile"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
