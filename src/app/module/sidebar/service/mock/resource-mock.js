import MockHelper from './../../../../common/helper/mock-helper'
import Constants from './../../../../common/constants'

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
    const result = {data: {}}
    const mockHelper = new MockHelper()
    const historyGenerator = () => mockHelper.getRandomInt(0, 999999)
    const resources = ['goldIngot', 'food', 'wood', 'planks']
    resources.forEach(resource => {
      result.data[`${resource}${Constants.RESOURCES.AMOUNT}`] = mockHelper.getRandomInt(0, 999999)
      result.data[`${Constants.RESOURCES.LATEST}${resource}${Constants.RESOURCES.HARVEST}`] = mockHelper.getRandomDate(new Date(2001, 1, 1), new Date(2016, 1, 1))
      result.data[`${resource}${Constants.RESOURCES.PRODUCTION}`] = mockHelper.getRandomArray(10, historyGenerator)
      result.data[`${resource}${Constants.RESOURCES.STORAGE}`] = mockHelper.getRandomArray(10, historyGenerator)
      result.data[`${resource}${Constants.RESOURCES.INTERVAL}`] = mockHelper.getRandomInt(1, 86400) * 1000
    })
    return Promise.resolve(result)
  }

}
