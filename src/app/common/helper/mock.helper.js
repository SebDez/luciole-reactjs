/**
 * Mock Helper static class
 * Generate random elements functions
 */
export default class MockHelper {

  static generateNumber (beginInclusive = -999999, endExclusive = 999999) {
    return Math.floor((Math.random() * endExclusive) + beginInclusive)
  }
}
