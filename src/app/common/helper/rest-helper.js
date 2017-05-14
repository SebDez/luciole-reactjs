import ToastrHelper from './toastr-helper'
import { I18n } from 'react-redux-i18n'

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
    /** @type {I18n}*/
    this.i18n = I18n
    /** @type {Array}*/
    this.managedCodes = [401, 403, 500]
  }

  /**
  * Manage errors from http request responses
  * @type {Object} error The error received
  */
  manageErrors (error) {
    const httpCode = error.response && error.response.status ? error.response.status : null
    const errorCode = this.managedCodes.indexOf(httpCode) > -1 ? httpCode : 'other'
    const httpResponses = {
      401: {
        title: this.i18n.t('httpErrors.401.title'),
        message: this.i18n.t('httpErrors.401.message'),
        type: 'warning',
        options: null
      },
      403: {
        title: this.i18n.t('httpErrors.403.title'),
        message: this.i18n.t('httpErrors.403.message'),
        type: 'warning',
        options: null
      },
      500: {
        title: this.i18n.t('httpErrors.500.title'),
        message: this.i18n.t('httpErrors.500.message'),
        type: 'error',
        options: null
      },
      other: {
        title: this.i18n.t('httpErrors.other.title'),
        message: this.i18n.t('httpErrors.other.message'),
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
