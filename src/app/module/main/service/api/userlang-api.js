import LucioleApi from './../../../../common/core/abstract/luciole-api'

/**
 * Class for API to manage user lang
 */
export default class UserLangApi extends LucioleApi {

  /**
   * Change the user's lang
   * @param {string} token The user's token
   * @param {string} lang The new user's lang to set
   * @return {Promise}  A promise to resolve
   */
  changeUserLang (token, lang) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/users/me/lang`, token)
    const body = this.encodeNewUserLang(lang)
    return this.requestHelper.put(uri, body)
  }

/**
 * Encode a body to valid JSON format
 * @param {string} lang The new user's lang to set
 * @return {Object}  A body encoded
 */
  encodeNewUserLang (lang) {
    return {lang}
  }
}
