function handleError(err, req, res, next) {
  // set locals, only providing error in development
  const dev_env = ["dev", "development"].includes(req.app.get("env"));
  console.log("ERROR:", err.message);
  res.locals.message = err.message;
  res.locals.error = dev_env ? err : {};

  // render the error page
  res.status(err.status || 500);
  dev_env ? res.render("error") : res.send(err.message);
}

module.exports = handleError;
