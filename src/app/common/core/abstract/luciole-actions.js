import RestHelper from './../../helper/rest-helper'
import ToastrHelper from './../../helper/toastr-helper'
import Constants from './../../../common/constants'

/**
 * LucioleActions
 * A default class for luciole actions
 */
class LucioleActions {

  /**
   * Create a new LucioleActions
   */
  constructor () {
    /** @type {RestHelper}*/
    this.restHelper = new RestHelper()
    /** @type {ToastrHelper}*/
    this.toastrHelper = new ToastrHelper()
  }

  /**
   * Manage HTTP errors
   * @type {Object} error The error received
   */
  manageHttpErrors (error) {
    this.restHelper.manageErrors(error)
  }

  /**
   * Get the user token from getState method
   * @type {Function} getState The getState method
   * @returns {Object} The user token
   */
  getTokenFromGetState (getState) {
    return getState().application.auth.user.token
  }

  /**
   * Create an action with the DO_NOTHING type
   * Returns a new action that can be managed by Redux
   */
  getDoNothingAction () {
    return {
      type: Constants.ACTIONS.APP.DO_NOTHING
    }
  }
}

/**
 * Export the component
 */
export default LucioleActions
