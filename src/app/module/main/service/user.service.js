import UserMockApi from './mock/user.mock'

/**
 * Class for User service
 */
export default class UserService {

  /**
   * Create a new UserService
   */
  constructor () {
    /** @type {UserMockApi} The api service to use */
    this.api = new UserMockApi()
  }

  /**
   * Get user's informations
   * @return {Promise}  A promise to resolve
   */
  getUserInformations () {
    return this.api.getUserInformations()
  }
}
