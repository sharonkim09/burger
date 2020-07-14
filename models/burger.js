// import the orm.js file
var orm = require("../config/orm");

var burger = {
  //show all burgers by calling 'selectAll' which can be accessed
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  //what user passes in will be stored as the result and the 'insertOne' function and be accessed 
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  //when user eats burger, the burger will be stored as a result and 'updateOne' can be accessed
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};
// export so other files have access
module.exports = burger;
