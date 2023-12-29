const handleErrorStatusCode = require("../services/errorHandling");

function handleError(err, req, res, next) {
  // set locals, only providing error in development
  const dev_env = ["dev", "development"].includes(req.app.get("env"));

  // assign a status code (ex. format: 4xx, 5xx) to the error
  handleErrorStatusCode(err);

  console.log("ERROR:", err);
  res.locals.message = err.message;
  res.locals.error = dev_env ? err : {};
  res.status(err.statusCode);

  // render the error page for dev environment
  dev_env
    ? res.render("error")
    : res.statusCode === 500
      ? res.send({ error: "Sorry, something went wrong!" })
      : res.send({ error: err.message });
}

module.exports = handleError;
