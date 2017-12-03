import ResourceApi from './api/resource-api'

/**
 * Class for Resource service
 */
export default class ResourceService {

  /**
   * Create a new ResourceService
   */
  constructor () {
    /** @type {ResourceApi} The api service to use */
    this.api = new ResourceApi()
  }

  /**
   * Get user resources
   * @param {string} token The user's token
   * @return {Promise}  A promise to resolve
   */
  getUserResources (token) {
    return this.api.getUserResources(token)
  }
}
