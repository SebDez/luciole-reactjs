import ResourceMockApi from './mock/resource.mock'

/**
 * Class for Resource service
 */
export default class ResourceService {

  /**
   * Create a new ResourceService
   */
  constructor () {
    /** @type {Object} The api service to use */
    this.api = new ResourceMockApi()
  }

  getUserResources () {
    return this.api.getUserResources()
  }
}
