const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const addressRouter = require("./address");
const orderRouter = require("./order");

router.use("/user", userRouter);
router.use("/address", addressRouter);
router.use("/order", orderRouter);

router.get("/", function (req, res, next) {
  res.redirect("/api-docs");
});

module.exports = router;
