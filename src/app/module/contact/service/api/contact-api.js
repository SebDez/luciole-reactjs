import LucioleApi from './../../../../common/core/abstract/luciole-api'

/**
 * Class for Contact API
 */
export default class ContactApi extends LucioleApi {

  /**
   * Send contact message
   * @type {Object} endpoint The endpoint to use
   * @type {Object} message The message object to send
   * @return {Promise}  A promise to resolve
   */
  sendContactMessage (endpoint, message) {
    const body = this.encodeMessage(message)
    const uri = `${endpoint}/v1/contact`
    return this.requestHelper.post(uri, body)
  }

/**
 * Encode a message to valid JSON format
 * @type {Object} endpoint The endpoint to use
 * @type {Object} message The message object to send
 * @return {Object}  A message encoded
 */
  encodeMessage (message) {
    return {
      mail: message.mail,
      subject: message.subject,
      content: message.content,
      recaptcha: message.captcharesponse
    }
  }
}
