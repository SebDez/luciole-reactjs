import LucioleActions from './../../../common/core/abstract/luciole-actions'
import ContactService from './../service/contact-service'
import { I18n } from 'react-redux-i18n'

/**
 * Class for ContactActions
 * All contact actions and related methods
 */
export default class ContactActions extends LucioleActions {

  /**
   * Create a new ContactActions
   */
  /* istanbul ignore next */
  constructor () {
    super()
    /** @type {ContactService}*/
    this.contactService = new ContactService()
    /** @type {Function}*/
    this.sendContactMessage = this.sendContactMessage.bind(this)
    /** @type {I18n}*/
    this.i18n = I18n
  }

  /**
   * Send contact message
   * @type {Object} message The message object to send
   * @return {Object}  The action to dispatch
   */
  sendContactMessage (message) {
    return (dispatch, getState) => {
      const endpoint = this.getEndpointFromGetState(getState)
      return this.contactService.sendContactMessage(endpoint, message).then(() => {
        this.toastrHelper.showMessage('success', this.i18n.t('application.contact.toast_success_title'), this.i18n.t('application.contact.toast_success_text'))
        dispatch(this.getDoNothingAction())
      }, this.manageHttpErrors.bind(this))
    }
  }

}
