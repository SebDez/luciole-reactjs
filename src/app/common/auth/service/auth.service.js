import AuthMockApi from './auth.mock'

/**
 * Class for Authentication Service
 */
export default class AuthService {

  /**
   * Create a new AuthService
   */
  constructor () {
    /** @type {Object} The api service to use */
    this.api = new AuthMockApi()
  }

  /**
   * Log an user in
   * @param {string} login The user's login to use
   * @param {string} password The user's password to use
   * @return {Object} A promise to resolve
   */
  logUserIn (login, password) {
    return this.api.logUserIn()
  }

  /**
   * Check if the user is connected
   * @param  {Object}  state The state to use
   * @return {Boolean} True if the user is connected
   */
  static isConnected (state) {
    return !!state.auth && !!state.auth.user && !!state.auth.user.token
  }
}
