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

  /**
   * Edit the user's personal datas
   * @param {string} token The user's token
   * @param {Date} birthDate The new user's birthDate
   * @param {string} gender The new user's gender
   * @param {string} country The new user's country alpha code
   * @param {string} region The new user's region alpha code
   * @return {Object} A promise to resolve
   */
  editPersonalDatas (token, birthDate, gender, country, region) {
    return this.api.editPersonalDatas(token, birthDate, gender, country, region)
  }
}
