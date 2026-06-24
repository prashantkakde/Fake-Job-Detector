const mysql = require("mysql2");

const db = mysql.createConnection({
 host: "localhost",
  user: "root",
  password: "PRas12@#",
  database: "fake_job_detector"
});

db.connect((err) => {
  if (err) {
    console.log("Connection Failed");
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;