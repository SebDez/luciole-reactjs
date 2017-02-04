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
    /** @type {Array}*/
    this.managedCodes = [401, 403, 500]
  }

  /**
  * Manage errors from http request responses
  * @type {Object} error The error received
  */
  manageErrors (error) {
    const httpCode = error.httpCode
    const errorCode = this.managedCodes.indexOf(httpCode) > -1 ? httpCode : 'other'
    const httpResponses = {
      401: {
        title: 'Vous n\'êtes pas connecté.',
        message: 'Reconnectez vous pour effectuer cette action.',
        type: 'warning',
        options: null
      },
      403: {
        title: 'Non autorisé',
        message: 'Vous n\'êtes pas autorisé à effectuer cette action.',
        type: 'warning',
        options: null
      },
      500: {
        title: 'Oops, un problème est survenu',
        message: 'L\'action n\'a pas été prise en compte.',
        type: 'error',
        options: null
      },
      other: {
        title: 'Aie, un problème est survenu',
        message: 'L\'action n\'a pas été prise en compte.',
        type: 'error',
        options: null
      }
    }
    this.toastrHelper.showMessage(
      httpResponses[errorCode].type,
      httpResponses[errorCode].title,
      httpResponses[errorCode].message,
      httpResponses[errorCode].options)
  }
}
