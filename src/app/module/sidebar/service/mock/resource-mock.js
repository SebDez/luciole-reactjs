import MockHelper from './../../../../common/helper/mock-helper'

/**
 * Class for Mock Resource Api
 */
/* istanbul ignore next */
export default class ResourceMockApi {

  /**
   * MOCK : Mock for getting user resources
   * @return {Object} A promise to resolve
   */
  getUserResources () {
    return Promise.reject({
      data: {
        gold: this.getRandomResource(),
        food: this.getRandomResource(),
        wood: this.getRandomResource()
      }
    })
  }

  /**
   * MOCK : Mock for getting random resource
   * @return {Object} A promise to resolve
   */
  getRandomResource () {
    const mockHelper = new MockHelper()
    return {
      amount: mockHelper.getRandomInt(0, 999999),
      production: mockHelper.getRandomInt(0, 999999),
      storage: mockHelper.getRandomInt(0, 999999)
    }
  }

}
