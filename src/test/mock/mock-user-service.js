/**
 * Mock User Service class
 */
export default class MockUserService {

  /**
   * A fake getUserProfile method
   */
  getUserProfile () {
    return Promise.resolve()
  }

  /**
   * A fake editUsername method
   */
  editUsername () {
    return Promise.resolve()
  }

  /**
   * A fake editPersonalDatas method
   */
  editPersonalDatas () {
    return Promise.resolve()
  }

}
