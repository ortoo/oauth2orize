/**
 * `OAuth2Error` error.
 *
 * @api public
 */
class OAuth2Error extends Error {
  constructor(message, code, uri, status) {
    super(message);

    this.message = message;
    this.code = code || 'server_error';
    this.uri = uri;
    this.status = status || 500;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Expose `OAuth2Error`.
 */
module.exports = OAuth2Error;
