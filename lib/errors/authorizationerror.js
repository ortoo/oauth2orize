/**
 * Module dependencies.
 */
var OAuth2Error = require('./oauth2error');

/**
 * `AuthorizationError` error.
 *
 * @api public
 */
class AuthorizationError extends OAuth2Error {
  constructor(message, code, uri, status) {
    super(message, code, uri, status);

    this.name = 'AuthorizationError';

    if (!status) {
      switch (code) {
        case 'invalid_request':
          this.status = 400;
          break;
        case 'unauthorized_client':
          this.status = 403;
          break;
        case 'access_denied':
          this.status = 403;
          break;
        case 'unsupported_response_type':
          this.status = 501;
          break;
        case 'invalid_scope':
          this.status = 400;
          break;
        case 'temporarily_unavailable':
          this.status = 503;
          break;
      }
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Expose `AuthorizationError`.
 */
module.exports = AuthorizationError;
