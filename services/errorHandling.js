const { Prisma } = require("@prisma/client");

function handlePrismaClientErrorResponseStatus(err) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) err.status = 400;
  else err.status = 500;
}

module.exports = handlePrismaClientErrorResponseStatus;
