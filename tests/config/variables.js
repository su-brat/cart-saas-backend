require("dotenv").config();
module.exports = {
  dev_env:
    process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development",
  url: `http://localhost:${process.env.PORT}`,
};
