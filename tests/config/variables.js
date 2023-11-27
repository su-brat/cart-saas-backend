const dev_env = ["dev", "development"].includes(process.env.NODE_ENV ?? "dev");

if (dev_env) {
  require("dotenv").config();
  console.log("Communicating with node app running on port", process.env.PORT);
}

module.exports = {
  dev_env: dev_env,
  url: `http://localhost:${process.env.PORT}`,
};
