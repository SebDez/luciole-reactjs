import LucioleApi from './../../../../common/core/abstract/luciole-api'
import User from './../model/user-model'

/**
 * Class for User API
 */
export default class UserApi extends LucioleApi {

  /**
   * Get user datas
   * @param {string} token The user's token
   * @return {Promise}  A promise to resolve
   */
  getUserProfile (token) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/users/me`, token)
    return this.requestHelper.get(uri).then(res => {
      return this.decodeUser(res.body)
    })
  }

  /**
   * Decode user from json
   * @param {string} json The json to decode
   * @return {User}  The user decoded
   */
  decodeUser (json) {
    return new User({
      mail: json.mail,
      _id: json._id,
      username: json.username,
      role: json.role,
      userTag: json.userTag,
      signUpDate: json.signUpDate,
      birthDate: json.birthDate,
      gender: json.gender,
      country: json.country,
      city: json.city,
      avatar: json.avatar
    })
  }

  /**
  * Edit the user's username
  * @param {string} token The user's token
  * @param {string} username The new user's username
  * @return {Object} A promise to resolve
  */
  editUsername (token, username) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/users/me/username`, token)
    const body = this.encodeNewUsername(username)
    return this.requestHelper.put(uri, body)
  }

  /**
  * Encode a body to valid JSON format
  * @param {string} username The new user's username to set
  * @return {Object}  A body encoded
  */
  encodeNewUsername (username) {
    return {username}
  }
}
