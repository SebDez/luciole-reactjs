import MockHelper from './../../../../common/helper/mock.helper'

/**
 * Class for Mock Resource Api
 */
export default class ResourceMockApi {

  /**
   * MOCK : Mock for getting user resources
   * @return {Object} A promise to resolve
   */
  getUserResources () {
    return Promise.resolve({
      data: {
        gold: this.getRandomResource(),
        food: this.getRandomResource(),
        wood: this.getRandomResource()
      }
    })
  }

  getRandomResource () {
    const mockHelper = new MockHelper()
    return {
      amount: mockHelper.getRandomInt(0, 999999),
      production: mockHelper.getRandomInt(0, 999999),
      storage: mockHelper.getRandomInt(0, 999999)
    }
  }

}
