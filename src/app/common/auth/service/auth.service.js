/**
 * Class for Authentication Service
 */
export default class AuthService {

/**
 * Check if the user is connected
 * @param  {Object}  state The state to use
 * @return {Boolean} True if the user is connected
 */
  static isConnected (state) {
    return !!state.auth && !!state.auth.user && !!state.auth.user.token
  }
}
