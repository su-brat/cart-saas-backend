var express = require("express");
var router = express.Router();

var apiRouter = require("./api/index");

router.use("/api", apiRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Cart SaaS API" });
});

module.exports = router;
