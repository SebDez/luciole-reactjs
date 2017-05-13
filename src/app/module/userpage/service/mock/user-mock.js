import MockHelper from './../../../../common/helper/mock-helper'
import User from './../model/user-model'

/**
 * Class for Mock User Api
 * A mock class for User api service
 */
/* istanbul ignore next */
export default class UserMockApi {

  /**
   * MOCK : Log an user in
   * @return {Object} A promise to resolve
   */
  getUserProfile () {
    return Promise.resolve({
      body: this.getUserMocked()
    })
  }

  getUserMocked () {
    const mockHelper = new MockHelper()
    return new User({
      mail: mockHelper.getRandomMail(),
      _id: mockHelper.getRandomId(),
      username: mockHelper.getRandomWord(),
      role: 'PLAYER',
      userTag: mockHelper.getRandomWord(),
      signUpDate: mockHelper.getRandomDate(new Date(2010, 5, 24), new Date(2017, 5, 24)),
      birthDate: mockHelper.getRandomDate(new Date(1980, 5, 24), new Date(2000, 5, 24)),
      gender: mockHelper.getRandomInt(1, 2),
      country: mockHelper.getRandomWord(),
      city: mockHelper.getRandomWord(),
      avatar: mockHelper.getRandomImgSrc()
    })
  }
}
