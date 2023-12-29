const { RequestValidationError } = require("./customErrors");

function getValidatedUserIdOrThrowError(
  id,
  error_message = "userid missing / invalid",
) {
  const safeId = parseInt(id);
  if (isNaN(safeId)) throw new RequestValidationError(error_message);
  return safeId;
}

function getValidatedOrderIdOrThrowError(
  id,
  error_message = "orderid missing / invalid",
) {
  const safeId = parseInt(id);
  if (isNaN(safeId)) throw new RequestValidationError(error_message);
  return safeId;
}

module.exports = {
  getValidatedUserIdOrThrowError,
  getValidatedOrderIdOrThrowError,
};
