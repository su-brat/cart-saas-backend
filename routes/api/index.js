var express = require("express");
var router = express.Router();

var usersRouter = require("./users");
var addressRouter = require("./address");

router.use("/users", usersRouter);
router.use("/address", addressRouter);

router.get("/", function (req, res, next) {
  res.redirect("/api-docs");
});

module.exports = router;
