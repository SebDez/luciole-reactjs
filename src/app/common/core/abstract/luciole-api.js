import RequestHelper from './../../helper/request-helper'

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
  }

}

/**
 * Export the component
 */
export default LucioleApi
