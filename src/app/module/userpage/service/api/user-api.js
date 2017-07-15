import LucioleApi from './../../../../common/core/abstract/luciole-api'
import User from './../model/user-model'
import Constants from './../../../../common/constants'

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
      region: json.region,
      avatar: {
        selected: (!!json.avatar && !!json.avatar.selected) ? json.avatar.selected : 'default',
        availableList: (!!json.avatar && !!json.avatar.availableList) ? json.avatar.availableList : [Constants.USER.AVATAR.DEFAULT]
      }
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

  /**
   * Edit the user's personal datas
   * @param {string} token The user's token
   * @param {Date} birthDate The new user's birthDate
   * @param {string} gender The new user's gender
   * @param {string} country The new user's country alpha code
   * @param {string} region The new user's region alpha code
   * @return {Object} A promise to resolve
   */
  editPersonalDatas (token, birthDate, gender, country, region) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/users/me/datas`, token)
    const body = this.encodePersonalDatas(birthDate, gender, country, region)
    return this.requestHelper.put(uri, body)
  }

  /**
  * Encode a body to valid JSON format
  * @param {Date} birthDate The new user's birthDate
  * @param {string} gender The new user's gender
  * @param {string} country The new user's country alpha code
  * @param {string} region The new user's region alpha code
  * @return {Object}  A body encoded
  */
  encodePersonalDatas (birthDate, gender, country, region) {
    return {
      birthDate,
      genderCode: gender,
      countryCode: country,
      regionCode: region
    }
  }

  /**
  * Edit the user's avatar
  * @param {string} token The user's token
  * @param {string} avatar The new user's avatar
  * @return {Object} A promise to resolve
  */
  editAvatar (token, avatar) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/users/me/avatar`, token)
    const body = this.encodeNewAvatar(avatar)
    return this.requestHelper.put(uri, body)
  }

  /**
  * Encode a body to valid JSON format
  * @param {string} avatar The new user's avatar to set
  * @return {Object}  A body encoded
  */
  encodeNewAvatar (avatar) {
    return {avatar}
  }

  /**
  * Get all avatar's list
  * @param {string} token The user's token
  * @return {Array} A promise to resolve
  */
  getAvatarList (token) {
    const endpoint = this.getAppEndpoint()
    const uri = this.addTokenQueryParamToUri(`${endpoint}/v1/avatars`, token)
    return this.requestHelper.get(uri).then(res => {
      return res.body.list
    })
  }

}
