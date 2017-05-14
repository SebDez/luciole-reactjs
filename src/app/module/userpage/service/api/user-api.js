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
}
