/**
 * Class for Mock Auth Api
 * A mock class for auth api service
 */
/* istanbul ignore next */
export default class AuthMockApi {

  /**
   * MOCK : Log an user in
   * @return {Object} A promise to resolve
   */
  logUserIn () {
    return Promise.resolve({
      data: {
        user: 'my user',
        token: 'my new token'
      }
    })
  }

  /**
   * MOCK : Disconnect an user
   * @return {Object} A promise to resolve
   */
  disconnectUser () {
    return Promise.resolve({
      data: {}
    })
  }
}