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

/**
 * Get the environnement conf from getState method
 * @type {Function} getState The getState method
 * @returns {Object} The app conf
 */
  getEnvConfFromGetState (getState) {
    return getState().application.app.conf
  }

  /**
   * Get the user token from getState method
   * @type {Function} getState The getState method
   * @returns {Object} The user token
   */
  getTokenFromGetState (getState) {
    return getState().application.auth.token
  }
}

/**
 * Export the component
 */
export default LucioleActions
