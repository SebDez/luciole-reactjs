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
   * @return {Object}  The action to dispatch with user resources
   */
  editPersonalDatas (birthDate, gender) {
    return (dispatch, getState) => {
      const token = this.getTokenFromGetState(getState)
      return this.userService.editPersonalDatas(token, birthDate, gender).then(() => {
        dispatch(this.editPersonalDatasAction(birthDate, gender))
      }).catch(this.manageHttpErrors.bind(this))
    }
  }

  /**
  * Create an action with the EDITPERSONALDATAS type
  * Returns a new action that can be managed by Redux
  * @param {string} username The new username
  */
  editPersonalDatasAction (birthDate, gender) {
    return {
      type: Constants.ACTIONS.USERPAGE.EDITPERSONALDATAS,
      birthDate,
      gender
    }
  }
}
