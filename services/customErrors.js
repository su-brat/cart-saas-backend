class RequestValidationError extends Error {
  constructor(message, statusCode = null) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { RequestValidationError };
