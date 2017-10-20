import LucioleApi from './../../../../common/core/abstract/luciole-api'
import Constants from './../../../../common/constants'

/**
 * Class for Resource Api
 */
export default class ResourceApi extends LucioleApi {

  /**
   * Get user's resources
   * @param {string} token The user's token
   * @return {Promise}  A promise to resolve
   */
  getUserResources (token) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/kingdoms/me/resources`, token)
    return this.requestHelper.get(uri).then(res => {
      return this.decodeResources(res.body)
    })
  }

  decodeResources (data) {
    let resources = {}
    Object.values(Constants.KINGDOM.RESOURCES).forEach(res => {
      resources[`${res}${Constants.RESOURCES.AMOUNT}`] = data[`${res}${Constants.RESOURCES.AMOUNT}`] || 0
      resources[`${Constants.RESOURCES.LATEST}${res}${Constants.RESOURCES.HARVEST}`] = new Date(data[`${Constants.RESOURCES.LATEST}${res}${Constants.RESOURCES.HARVEST}`])
      resources[`${res}${Constants.RESOURCES.PRODUCTION}`] = data[`${res}${Constants.RESOURCES.PRODUCTION}`] || []
      resources[`${res}${Constants.RESOURCES.STORAGE}`] = data[`${res}${Constants.RESOURCES.STORAGE}`] || []
      resources[`${res}${Constants.RESOURCES.INTERVAL}`] = data[`${res}${Constants.RESOURCES.INTERVAL}`] * 100 || 1
    })
    return resources
  }
}
