/**
 * Mock Auth Service class
 */
export default class MockAuthService {

  /**
   * A fake logUserIn method
   */
  logUserIn () {
    return Promise.resolve()
  }

  /**
   * A fake disconnectUser method
   */
  disconnectUser () {
    return Promise.resolve()
  }

  /**
   * A fake signUserIn method
   */
  signUserIn () {
    return Promise.resolve()
  }

}
