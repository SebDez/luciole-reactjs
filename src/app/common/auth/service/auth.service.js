import AuthMockApi from './mock/auth.mock'

/**
 * Class for Authentication Service
 * The authentication's methods service
 */
export default class AuthService {

  /**
   * Create a new AuthService
   */
  constructor () {
    /** @type {AuthMockApi} The api service to use */
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
   * Disconnect an user
   * @return {Object} A promise to resolve
   */
  disconnectUser () {
    return this.api.disconnectUser()
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
