require("dotenv").config();
module.exports = {
  prod_env:
    process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production",
  url: `http://localhost:${process.env.PORT}`,
};
