var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var swagger = require("./swagger");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

swagger(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  const dev_env = ["dev", "development"].includes(req.app.get("env"));
  console.log("ERROR:", err.message);
  res.locals.message = err.message;
  res.locals.error = dev_env ? err : {};

  // render the error page
  res.status(err.status || 500);
  dev_env ? res.render("error") : res.send(err.message);
});

module.exports = app;
