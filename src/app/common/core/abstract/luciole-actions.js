import RestHelper from './../../helper/rest-helper'

/**
 * LucioleActions
 * A default class for luciole actions
 */
class LucioleActions {

  /**
   * Create a new LucioleActions
   */
  constructor () {
    /** @type {Object}*/
    this.restHelper = new RestHelper()
  }

  /**
   * Manage HTTP errors
   * @type {Object} error The error received
   */
  manageHttpErrors (error) {
    this.restHelper.manageErrors(error)
  }
}

/**
 * Export the component
 */
export default LucioleActions
