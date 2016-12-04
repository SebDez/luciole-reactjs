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
    return {
      amount: MockHelper.generateNumber(0),
      production: MockHelper.generateNumber(0),
      storage: MockHelper.generateNumber(0)
    }
  }

}
