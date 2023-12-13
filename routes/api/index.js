var express = require("express");
var router = express.Router();

var usersRouter = require("./users");
var addressesRouter = require("./addresses");
var ordersRouter = require("./orders");

router.use("/users", usersRouter);
router.use("/addresses", addressesRouter);
router.use("/orders", ordersRouter);

router.get("/", function (req, res, next) {
  res.redirect("/api-docs");
});

module.exports = router;
