/**
 * LucioleApiService
 * A default class for luciole api services
 */
class LucioleApiService {

/**
 * Get endpoint to consume API
 * @type {Object} conf The app conf object
 * @type {string} endpoint The endpoint to consume
 * @returns {string} The app full endpoint
 */
  getFullEndPoint (conf, endpoint) {
    return conf.api.url + endpoint
  }

  /**
   * Get endpoint to consume API with user token
   * @type {Object} conf The app conf object
   * @type {string} endpoint The endpoint to consume
   * @type {string} token The user token
   * @returns {string} The app full endpoint with auth (token)
   */
  getFullEndPointWithToken (conf, endpoint, token) {
    return this.getFullEndPoint(conf, endpoint) + '?token=' + token
  }
}

/**
 * Export the component
 */
export default LucioleApiService
