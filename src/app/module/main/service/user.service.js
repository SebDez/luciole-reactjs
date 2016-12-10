import UserMockApi from './mock/user.mock'

/**
 * Class for User service
 */
export default class UserService {

  /**
   * Create a new UserService
   */
  constructor () {
    /** @type {Object} The api service to use */
    this.api = new UserMockApi()
  }

  getUserInformations () {
    return this.api.getUserInformations()
  }
}
