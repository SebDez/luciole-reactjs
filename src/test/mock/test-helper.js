/**
 * Test Helper class
 */
export default class TestHelper {

  /**
   * A fake dispatch method
   */
  static dispatch () {
    return 0
  }

  /**
   * A fake dispatch method
   */
  static getState () {
    return {
      i18n: {
        locale: 'my-lang'
      }
    }
  }

}
