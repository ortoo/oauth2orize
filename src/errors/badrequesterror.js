/**
 * `BadRequestError` error.
 *
 * @api public
 */
class BadRequestError extends Error {
  constructor(message) {
    super(message);

    this.name = 'BadRequestError';
    this.message = message;
    this.status = 400;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Expose `BadRequestError`.
 */
module.exports = BadRequestError;
