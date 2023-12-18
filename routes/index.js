const express = require("express");
const router = express.Router();

const apiRouter = require("./api/index");

const rootUrlHandler = require("../controllers");

router.use("/api", apiRouter);

/* GET home page. */
router.get("/", rootUrlHandler);

module.exports = router;
