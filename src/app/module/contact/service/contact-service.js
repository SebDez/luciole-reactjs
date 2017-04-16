import ContactApi from './api/contact-api'

/**
 * Class for Contact service
 */
export default class ContactService {

  /**
   * Create a new ContactService
   */
  constructor () {
    /** @type {ContactApi} The api service to use */
    this.api = new ContactApi()
  }

  /**
   * Send contact message
   * @type {Object} message The message object to send
   * @return {Promise}  A promise to resolve
   */
  sendContactMessage (message) {
    return this.api.sendContactMessage(message)
  }
}
