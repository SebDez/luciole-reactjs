import UserLangApi from './api/userlang-api'

/**
 * Class for service to manage user lang service
 */
export default class UserLangService {

  /**
   * Create a new UserLangService
   */
  constructor () {
    /** @type {UserLangApi} The api service to use */
    this.api = new UserLangApi()
  }

  /**
   * Change the user's lang
   * @param {string} token The user's token
   * @param {string} lang The new user's lang to set
   * @return {Promise}  A promise to resolve
   */
  changeUserLang (token, lang) {
    return this.api.changeUserLang(token, lang)
  }
}
