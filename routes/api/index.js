const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const addressesRouter = require("./addresses");
const ordersRouter = require("./orders");

router.use("/users", usersRouter);
router.use("/addresses", addressesRouter);
router.use("/orders", ordersRouter);

router.get("/", function (req, res, next) {
  res.redirect("/api-docs");
});

module.exports = router;
