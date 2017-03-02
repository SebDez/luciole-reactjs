import LucioleApi from './../../../../common/core/abstract/luciole-api'

/**
 * Class for Contact API
 */
export default class ContactApi extends LucioleApi {

  /**
   * Send contact message
   * @return {Promise}  A promise to resolve
   */
  sendContactMessage (endpoint, message) {
    const body = {
      mail: message.mail,
      subject: message.subject,
      content: message.content
    }
    const uri = `${endpoint}/v1/contact`
    return this.requestHelper.post(uri, body)
  }
}
