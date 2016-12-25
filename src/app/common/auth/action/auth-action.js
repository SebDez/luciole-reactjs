import Constants from './../../constants'
import AuthService from './../service/auth-service'

/**
 * Class for AuthActions
 * All authentication actions and related methods
 */
export default class AuthActions {

  /**
   * Create a new AuthActions
   */
  constructor () {
    /** @type {AuthService}*/
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
   * @param  {string} token    The token to return
   * @return {Object}          The action
   */
  logUserInSuccessAction (token) {
    return {
      type: Constants.ACTIONS.AUTH.LOG_USER_IN_SUCCESS,
      token
    }
  }

  /**
   * Create an action with the LOG_USER_IN_FAILURE type
   * Returns a new action that can be managed by Redux
   * @param  {Object} err     The error to return
   * @return {Object}          The action
   */
  logUserInFailureAction (err) {
    return {
      type: Constants.ACTIONS.AUTH.LOG_USER_IN_FAILURE,
      err
    }
  }

  /**
   * Create an action with the DISCONNECT_USER_SUCCESS type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   * @return {Object}          The action
   */
  disconnectUserInSuccessAction () {
    return {
      type: Constants.ACTIONS.AUTH.DISCONNECT_USER_SUCCESS
    }
  }

  /**
   * Create an action with the DISCONNECT_USER_FAILURE type
   * Returns a new action that can be managed by Redux
   * @param  {Object} err     The error to return
   * @return {Object}          The action
   */
  disconnectUserInFailureAction (err) {
    return {
      type: Constants.ACTIONS.AUTH.DISCONNECT_USER_FAILURE,
      err
    }
  }
}