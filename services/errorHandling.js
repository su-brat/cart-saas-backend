const { Prisma } = require("@prisma/client");
const { RequestValidationError } = require("./customErrors");

function handleErrorStatusCode(err) {
  if (err.statusCode) return; // specific status code preceeds generic status code
  if (
    err instanceof RequestValidationError ||
    err instanceof Prisma.PrismaClientValidationError ||
    err instanceof Prisma.PrismaClientKnownRequestError
  )
    err.statusCode = 400;
  else err.statusCode = 500;
}

module.exports = handleErrorStatusCode;
