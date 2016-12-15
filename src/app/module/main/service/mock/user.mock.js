import MockHelper from './../../../../common/helper/mock.helper'

/**
 * Class for Mock User Api
 */
export default class UserMockApi {

  /**
   * MOCK : Mock for getting user informations
   * @return {Object} A promise to resolve
   */
  getUserInformations () {
    return Promise.resolve({
      data: this.getRandomUser()
    })
  }

  /**
   * Get a random user with generated values
   * @return {User}  An user generated
   */
  getRandomUser () {
    const mockHelper = new MockHelper()
    return {
      avatar: mockHelper.getRandomImgSrc(),
      mail: mockHelper.getRandomMail(),
      _id: mockHelper.getRandomId(),
      username: mockHelper.getRandomWord(),
      role: 'player',
      userTag: mockHelper.getRandomWord(),
      signUpDate: mockHelper.getRandomDate(new Date(90, 5, 24), new Date(2016, 5, 24))
    }
  }

}
