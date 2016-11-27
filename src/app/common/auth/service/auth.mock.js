/**
 * Class for Mock Auth Api
 */
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
}
