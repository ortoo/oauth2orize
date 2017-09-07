/**
 * Module dependencies.
 */
var OAuth2Error = require('./oauth2error');

/**
 * `TokenError` error.
 *
 * @api public
 */
class TokenError extends OAuth2Error {
  constructor(message, code, uri, status) {
    super(message, code, uri, status);

    this.name = 'TokenError';

    if (!status) {
      switch (code) {
        case 'invalid_request':
          this.status = 400;
          break;
        case 'invalid_client':
          this.status = 401;
          break;
        case 'invalid_grant':
          this.status = 403;
          break;
        case 'unauthorized_client':
          this.status = 403;
          break;
        case 'unsupported_grant_type':
          this.status = 501;
          break;
        case 'invalid_scope':
          this.status = 400;
          break;
      }
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Expose `TokenError`.
 */
module.exports = TokenError;
