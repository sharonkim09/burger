// import
var connection = require("../config/connection");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  

// creating an orm object to query db
// getting template from cats activites
var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";
  
      connection.query(queryString, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    // need to work on adding burger 
    insertOne: function(table,cols,vals,cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
        // An example of objColVals would be {name: panther, sleepy: true}
      updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },


}
// emport
module.exports = orm;