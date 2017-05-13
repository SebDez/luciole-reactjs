/**
 * Class for User Model
 */
export default class User {

  /**
   * Create a new User
   */
  constructor ({mail, password, _id, username, role, userTag, signUpDate,
    birthDate, gender, country, city, avatar}) {
    /** @type {string} */
    this.token = null
    /** @type {string} */
    this.mail = mail
    /** @type {string} */
    this._id = _id
    /** @type {string} */
    this.username = username
    /** @type {string} */
    this.role = role
    /** @type {string} */
    this.userTag = userTag
    /** @type {Date} */
    this.signUpDate = signUpDate
    /** @type {Date} */
    this.birthDate = birthDate
    /** @type {string} */
    this.gender = gender
    /** @type {string} */
    this.country = country
    /** @type {string} */
    this.city = city
    /** @type {string} */
    this.avatar = avatar
  }

/**
 * Set the user's token
 * @param {string} token The user's token to set
 */
  setToken (token) {
    this.token = token
  }
}
