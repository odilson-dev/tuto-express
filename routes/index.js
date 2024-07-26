var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET home page. */
router.get("/", userController.getUsernames());

router.get("/new", (req, res, next) => {
  res.send(
    "This route is to display a HTML form to the user with one username input text field. It will submit to the next route"
  );
});

router.post("/new", (req, res, next) => {
  console.log("username to be saved: ", req.body.username);
});

module.exports = router;
