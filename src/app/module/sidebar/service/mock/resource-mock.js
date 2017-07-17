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
    const result = {data: {}}
    const mockHelper = new MockHelper()
    const historyGenerator = () => mockHelper.getRandomInt(0, 999999)
    const resources = ['goldIngot', 'food', 'wood', 'planks']
    resources.forEach(resource => {
      result.data[`${resource}Amount`] = mockHelper.getRandomInt(0, 999999)
      result.data[`latest${resource}Harvest`] = mockHelper.getRandomDate(new Date(2001, 1, 1), new Date(2016, 1, 1))
      result.data[`${resource}ProductionHistory`] = mockHelper.getRandomArray(10, historyGenerator)
      result.data[`${resource}StorageHistory`] = mockHelper.getRandomArray(10, historyGenerator)
    })
    return Promise.resolve(result)
  }

}
