import ResourceMockApi from './mock/resource.mock'

/**
 * Class for Resource service
 */
export default class ResourceService {

  /**
   * Create a new ResourceService
   */
  constructor () {
    /** @type {ResourceMockApi} The api service to use */
    this.api = new ResourceMockApi()
  }

  /**
   * Get user resources
   * @return {Promise}  A promise to resolve
   */
  getUserResources () {
    return this.api.getUserResources()
  }
}
