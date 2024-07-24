var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("usernames will be logged here - wip");
  res.render("index", { title: "Express" });
});

module.exports = router;
