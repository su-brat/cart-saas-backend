function rootUrlHandler(req, res, next) {
  res.render("index", { title: "Cart SaaS API" });
}

module.exports = rootUrlHandler;
