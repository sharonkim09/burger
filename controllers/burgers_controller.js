const express = require("express");
const burger = require("../models/burger");

const router = express.Router();
// router on root that will show db and render to html
router.get("/", function(req, res) {
  burger.selectAll((data)=> {
    let hdbrsObj = {
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
      (result)=> {
        // Send back the ID of new burger
        res.json({ id: result.insertId });
      }
    );
  });
  // router for when user devours a hamburger and updating it to devoured
  router.put("/api/burgers/:id", (req, res) =>{
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, (result) =>{
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  // export so other files can have access
  module.exports = router;