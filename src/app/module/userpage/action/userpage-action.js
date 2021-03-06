import LucioleActions from './../../../common/core/abstract/luciole-actions'
import Constants from './../../../common/constants'
import UserService from './../service/user-service'

/**
 * Class for UserPageActions
 * All userpage actions and related methods
 */
export default class UserPageActions extends LucioleActions {

  /**
   * Create a new UserPageActions
   */
  /* istanbul ignore next */
  constructor () {
    super()
    /** @type {UserService}*/
    this.userService = new UserService()
    /** @type {Function}*/
    this.openEditUsernameModalAction = this.openEditUsernameModalAction.bind(this)
    /** @type {Function}*/
    this.closeEditUsernameModalAction = this.closeEditUsernameModalAction.bind(this)
    /** @type {Function}*/
    this.editUsername = this.editUsername.bind(this)
    /** @type {Function}*/
    this.editUsernameAction = this.editUsernameAction.bind(this)
    /** @type {Function}*/
    this.openEditPersonalDatasModalAction = this.openEditPersonalDatasModalAction.bind(this)
    /** @type {Function}*/
    this.closeEditPersonalDatasModalAction = this.closeEditPersonalDatasModalAction.bind(this)
    /** @type {Function}*/
    this.editPersonalDatas = this.editPersonalDatas.bind(this)
    /** @type {Function}*/
    this.editPersonalDatasAction = this.editPersonalDatasAction.bind(this)
    /** @type {Function}*/
    this.openEditAvatarModalAction = this.openEditAvatarModalAction.bind(this)
    /** @type {Function}*/
    this.closeEditAvatarModalAction = this.closeEditAvatarModalAction.bind(this)
    /** @type {Function}*/
    this.editAvatar = this.editAvatar.bind(this)
    /** @type {Function}*/
    this.editAvatarAction = this.editAvatarAction.bind(this)
    /** @type {Function}*/
    this.getAvatarList = this.getAvatarList.bind(this)
    /** @type {Function}*/
    this.getAvatarListAction = this.getAvatarListAction.bind(this)
  }

  /**
   * Create an action with the OPEN_EDITUSERNAME_MODAL type
   * Returns a new action that can be managed by Redux
   */
  openEditUsernameModalAction () {
    return {
      type: Constants.ACTIONS.USERPAGE.OPEN_EDITUSERNAME_MODAL
    }
  }

  /**
  * Create an action with the CLOSE_EDITUSERNAME_MODAL type
  * Returns a new action that can be managed by Redux
  */
  closeEditUsernameModalAction () {
    return {
      type: Constants.ACTIONS.USERPAGE.CLOSE_EDITUSERNAME_MODAL
    }
  }

  /**
   * Update the user's username
   * @return {Object}  The action to dispatch with user resources
   */
  editUsername (username) {
    return (dispatch, getState) => {
      const token = this.getTokenFromGetState(getState)
      return this.userService.editUsername(token, username).then(() => {
        dispatch(this.editUsernameAction(username))
      }).catch(this.manageHttpErrors.bind(this))
    }
  }

  /**
  * Create an action with the EDITUSERNAME type
  * Returns a new action that can be managed by Redux
  * @param {string} username The new username
  */
  editUsernameAction (username) {
    return {
      type: Constants.ACTIONS.USERPAGE.EDITUSERNAME,
      username
    }
  }

  /**
   * Create an action with the OPEN_EDITPERSONALDATAS_MODAL type
   * Returns a new action that can be managed by Redux
   */
  openEditPersonalDatasModalAction () {
    return {
      type: Constants.ACTIONS.USERPAGE.OPEN_EDITPERSONALDATAS_MODAL
    }
  }

  /**
  * Create an action with the CLOSE_EDITPERSONALDATAS_MODAL type
  * Returns a new action that can be managed by Redux
  */
  closeEditPersonalDatasModalAction () {
    return {
      type: Constants.ACTIONS.USERPAGE.CLOSE_EDITPERSONALDATAS_MODAL
    }
  }

  /**
   * Update the user's personal datas
   * @param {Date} birthDate The new user's birthDate
   * @param {string} gender The new user's gender
   * @param {string} country The new user's country alpha code
   * @param {string} region The new user's region alpha code
   * @return {Object}  The action to dispatch with user resources
   */
  editPersonalDatas (birthDate, gender, country, region) {
    return (dispatch, getState) => {
      const token = this.getTokenFromGetState(getState)
      return this.userService.editPersonalDatas(token, birthDate, gender,
        country, region).then(() => {
          dispatch(this.editPersonalDatasAction(birthDate, gender, country, region))
        }).catch(this.manageHttpErrors.bind(this))
    }
  }

  /**
  * Create an action with the EDITPERSONALDATAS type
  * Returns a new action that can be managed by Redux
  * @param {Date} birthDate The new user's birthDate
  * @param {string} gender The new user's gender
  * @param {string} country The new user's country alpha code
  * @param {string} region The new user's region alpha code
  */
  editPersonalDatasAction (birthDate, gender, country, region) {
    return {
      type: Constants.ACTIONS.USERPAGE.EDITPERSONALDATAS,
      birthDate,
      gender,
      country,
      region
    }
  }

  /**
   * Create an action with the OPEN_EDITAVATAR_MODAL type
   * Returns a new action that can be managed by Redux
   */
  openEditAvatarModalAction () {
    return {
      type: Constants.ACTIONS.USERPAGE.OPEN_EDITAVATAR_MODAL
    }
  }

  /**
  * Create an action with the CLOSE_EDITUSERNAME_MODAL type
  * Returns a new action that can be managed by Redux
  */
  closeEditAvatarModalAction () {
    return {
      type: Constants.ACTIONS.USERPAGE.CLOSE_EDITAVATAR_MODAL
    }
  }

  /**
   * Update the user's avatar
   * @param {string} avatar The new user's avatar
   * @return {Object}  The action to dispatch with user resources
   */
  editAvatar (avatar) {
    return (dispatch, getState) => {
      const token = this.getTokenFromGetState(getState)
      return this.userService.editAvatar(token, avatar).then(() => {
        dispatch(this.editAvatarAction(avatar))
      }).catch(this.manageHttpErrors.bind(this))
    }
  }

  /**
  * Create an action with the EDITAVATAR type
  * Returns a new action that can be managed by Redux
  * @param {string} avatar The new user's avatar
  */
  editAvatarAction (avatar) {
    return {
      type: Constants.ACTIONS.USERPAGE.EDITAVATAR,
      avatar
    }
  }

  /**
   * Get the full avatars list
   * @return {Object}  The action to dispatch with user resources
   */
  getAvatarList () {
    return (dispatch, getState) => {
      const token = this.getTokenFromGetState(getState)
      return this.userService.getAvatarList(token).then(res => {
        dispatch(this.getAvatarListAction(res))
      }).catch(this.manageHttpErrors.bind(this))
    }
  }

  /**
  * Create an action with the GETAVATARLIST type
  * @param {Array} avatarList The full avatars list
  * Returns a new avatarList that can be managed by Redux
  */
  getAvatarListAction (avatarList) {
    return {
      type: Constants.ACTIONS.USERPAGE.GETAVATARLIST,
      avatarList
    }
  }
}
