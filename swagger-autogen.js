const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger.json";
const endpointsFiles = [
  "./app.js",
  // "./routes/*.js"
];

const config = {
  info: {
    title: "Cart SaaS API Documentation",
    description: "",
  },
  tags: [],
  host: "",
  schemes: ["http", "https"],
};

swaggerAutogen(outputFile, endpointsFiles, config);
