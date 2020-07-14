// import
var connection = require("../config/connection");
// creating an orm object to query db
var orm = {
    selectAll: function(table, cb) {
      var dbQuery = "SELECT * FROM " + table + ";";
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },

}
// emport
module.exports = orm;