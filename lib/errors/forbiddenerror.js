/**
 * `ForbiddenError` error.
 *
 * @api public
 */
class ForbiddenError extends Error {
  constructor(message) {
    super(message);

    this.name = 'ForbiddenError';
    this.message = message;
    this.status = 403;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Expose `ForbiddenError`.
 */
module.exports = ForbiddenError;
