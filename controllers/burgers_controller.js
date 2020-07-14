var express = require("express");
var burger = require("../models/burger");

var router = express.Router();
// router on root that will show db and render to html
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });
});
// router to create a burger and send back to user
router.post("/api/burgers", function(req, res) {
    burger.insertOne(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {
        // Send back the ID of new burger
        res.json({ id: result.insertId });
      }
    );
  });
  module.exports = router;