import ToastrHelper from './toastr-helper'

/**
 * REST Helper class
 * Used to manage REST interactions
 */
export default class RestHelper {

  /**
   * Create a new Rest Helper
   */
  constructor () {
    /** @type {ToastrHelper}*/
    this.toastrHelper = new ToastrHelper()
  }

  /**
  * Manage errors from http request responses
  * @type {Object} error The error received
  */
  manageErrors (error) {
    console.log(error)
    this.toastrHelper.showMessage('error', 'titre', 'message', {})
    this.toastrHelper.showMessage('info', 'titre', 'message', {showCloseButton: false})
    this.toastrHelper.showMessage('warning', 'titre', 'message', {})
  }
}
