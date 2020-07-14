// MySQL connection setup
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Piglet64",
    database: "burgers_db"
  });
}
connection.connect();
// export connection for other files to use
module.exports = connection;