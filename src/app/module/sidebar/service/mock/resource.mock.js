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
        gold: {
          amount: 25,
          production: 10,
          storage: 15
        },
        food: {
          amount: 25,
          production: 10,
          storage: 15
        },
        wood: {
          amount: 25,
          production: 10,
          storage: 15
        }
      }
    })
  }

}
