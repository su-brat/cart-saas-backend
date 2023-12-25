function handleError(err, req, res, next) {
  // set locals, only providing error in development
  const dev_env = ["dev", "development"].includes(req.app.get("env"));
  console.log("ERROR:", err.message);
  res.locals.message = err.message;
  res.locals.error = dev_env ? err : {};

  // render the error page
  // NOTE: Assumption: All the handled errors are already given a status with number 4xx, 5xx etc.
  res.status(err.status || 500);
  dev_env
    ? res.render("error")
    : res.statusCode === 500
      ? res.send({ error: "Sorry, something went wrong!" })
      : res.send({ error: err.message });
}

module.exports = handleError;
