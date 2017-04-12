import ContactApi from './api/contact-api'
import config from 'config'

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
   * @type {Object} endpoint The endpoint to use
   * @type {Object} message The message object to send
   * @return {Promise}  A promise to resolve
   */
  sendContactMessage (endpoint, message) {
    return this.api.sendContactMessage(endpoint, message)
  }
}
