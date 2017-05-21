import UserApi from './api/user-api'

/**
 * Class for Authentication Service
 * The authentication's methods service
 */
export default class UserService {

  /**
   * Create a new AuthService
   */
  constructor () {
    /** @type {UserApi} The api service to use */
    this.api = new UserApi()
  }

  /**
   * Get the user datas
   * @param {string} token The user's token
   * @return {Object} A promise to resolve
   */
  getUserProfile (token) {
    return this.api.getUserProfile(token)
  }

  /**
   * Edit the user's username
   * @param {string} token The user's token
   * @param {string} username The new user's username
   * @return {Object} A promise to resolve
   */
  editUsername (token, username) {
    return this.api.editUsername(token, username)
  }
}
