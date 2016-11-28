import Constants from './../../constants'
import AuthService from './../service/auth.service'

/**
 * Class for AuthActions
 */
export default class AuthActions {

  /**
   * Create a new AuthActions
   */
  constructor () {
    /** @type {Object}*/
    this.authService = new AuthService()
    /** @type {Function}*/
    this.logUserIn = this.logUserIn.bind(this)
    /** @type {Function}*/
    this.disconnectUser = this.disconnectUser.bind(this)
    /** @type {Function}*/
    this.logUserInSuccessAction = this.logUserInSuccessAction.bind(this)
    /** @type {Function}*/
    this.logUserInFailureAction = this.logUserInFailureAction.bind(this)
  }

  /**
   * Used to log an user in
   * @param  {string} login    The user's login to use
   * @param  {string} password The user's password to use
   * @return {Object}          The action to dispatch
   */
  logUserIn (login, password) {
    return dispatch => {
      return this.authService.logUserIn(login, password).then(res => {
        dispatch(this.logUserInSuccessAction(res.data.token))
      }, err => {
        dispatch(this.logUserInFailureAction(err))
      })
    }
  }

  /**
   * Disconnect an user
   * @return {Object}          The action to dispatch
   */
  disconnectUser () {
    return dispatch => {
      return this.authService.disconnectUser().then(() => {
        dispatch(this.disconnectUserInSuccessAction())
      }, err => {
        dispatch(this.disconnectUserInFailureAction(err))
      })
    }
  }

  /**
   * Create an action with the LOG_USER_IN_SUCCESS type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   */
  logUserInSuccessAction (token) {
    return {
      type: Constants.LOG_USER_IN_SUCCESS,
      token
    }
  }

  /**
   * Create an action with the LOG_USER_IN_FAILURE type
   * Returns a new action that can be managed by Redux
   */
  logUserInFailureAction (err) {
    return {
      type: Constants.LOG_USER_IN_FAILURE,
      err
    }
  }

  /**
   * Create an action with the DISCONNECT_USER_SUCCESS type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   */
  disconnectUserInSuccessAction () {
    return {
      type: Constants.DISCONNECT_USER_SUCCESS
    }
  }

  /**
   * Create an action with the DISCONNECT_USER_FAILURE type
   * Returns a new action that can be managed by Redux
   */
  disconnectUserInFailureAction (err) {
    return {
      type: Constants.DISCONNECT_USER_FAILURE,
      err
    }
  }
}
