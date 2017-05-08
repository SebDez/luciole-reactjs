import LucioleApi from './../../../../common/core/abstract/luciole-api'

/**
 * Class for Auth API
 */
export default class AuthApi extends LucioleApi {

  /**
   * Log an user in
   * @param {string} login The user's login to use
   * @param {string} password The user's password to use
   * @return {Object} A promise to resolve
   */
  logUserIn (login, password) {
    const endpoint = this.getAppEndpoint()
    const body = this.encodeLogData(login, password)
    const uri = `${endpoint}/oauth2/token/owner`
    return this.requestHelper.post(uri, body)
  }

  /**
   * Disconnect an user
   * @param {string} token The user's token
   * @return {Object} A promise to resolve
   */
  disconnectUser (token) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/logout`, token)
    return this.requestHelper.post(uri)
  }

  /**
   * Encode log body to valid JSON format
   * @param {string} login The user's login to use
   * @param {string} password The user's password to use
   * @return {Object}  A body encoded
   */
  encodeLogData (login, password) {
    return {
      username: login,
      password,
      client_id: 'consumer2',
      grant_type: 'password'
    }
  }
}
