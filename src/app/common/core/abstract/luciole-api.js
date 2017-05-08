import RequestHelper from './../../helper/request-helper'
import config from 'config'

/**
 * LucioleApi
 * A default class for luciole apis
 */
class LucioleApi {

  /**
   * Create a new LucioleApi
   */
  constructor () {
    /** @type {RequestHelper}*/
    this.requestHelper = new RequestHelper()
    /** @type {Object}*/
    this.appConf = config
  }

  /**
  * Get app endpoint from appConf
  * @returns {string} The app endpoint to use
  */
  getAppEndpoint () {
    return `${this.appConf.api.url}:${this.appConf.api.port}`
  }

  /**
   * Add token query params to api uri string
   * @param {string} uri The uri to use
   * @param {string} token The token to use
   * @returns {string} The uri string with token query param
   */
  addTokenQueryParamToUri (uri, token) {
    return `${uri}?access_token=${token}`
  }
}

/**
 * Export the component
 */
export default LucioleApi
