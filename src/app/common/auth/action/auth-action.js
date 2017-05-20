import Constants from './../../constants'
import AuthService from './../service/auth-service'
import LucioleActions from './../../core/abstract/luciole-actions'
import { I18n } from 'react-redux-i18n'
import UserService from './../../../module/userpage/service/user-service'

/**
 * Class for AuthActions
 * All authentication actions and related methods
 */
export default class AuthActions extends LucioleActions {

  /**
   * Create a new AuthActions
   */
  /* istanbul ignore next */
  constructor () {
    super()
    /** @type {AuthService}*/
    this.authService = new AuthService()
    /** @type {UserService}*/
    this.userService = new UserService()
    /** @type {I18n}*/
    this.i18n = I18n
    /** @type {Function}*/
    this.logUserIn = this.logUserIn.bind(this)
    /** @type {Function}*/
    this.signUserIn = this.signUserIn.bind(this)
    /** @type {Function}*/
    this.disconnectUser = this.disconnectUser.bind(this)
    /** @type {Function}*/
    this.logUserInSuccessAction = this.logUserInSuccessAction.bind(this)
    /** @type {Function}*/
    this.logUserInFailureAction = this.logUserInFailureAction.bind(this)
    /** @type {Function}*/
    this.openLoginModalAction = this.openLoginModalAction.bind(this)
    /** @type {Function}*/
    this.closeLoginModalAction = this.closeLoginModalAction.bind(this)
    /** @type {Function}*/
    this.openSignUpModalAction = this.openSignUpModalAction.bind(this)
    /** @type {Function}*/
    this.closeSignUpModalAction = this.closeSignUpModalAction.bind(this)
    /** @type {Function}*/
    this.signUserInSuccessAction = this.signUserInSuccessAction.bind(this)
  }

  /**
   * Used to log an user in
   * @param  {string} login    The user's login to use
   * @param  {string} password The user's password to use
   * @return {Object}          The action to dispatch
   */
  logUserIn (login, password) {
    var token = null
    return dispatch => {
      return this.authService.logUserIn(login, password).then(mytoken => {
        token = mytoken
        return this.userService.getUserProfile(token)
      }, err => {
        const title = this.i18n.t('application.auth.tstFailTitle')
        const msg = this.i18n.t('application.auth.tstFailMessage')
        this.toastrHelper.showMessage('warning', title, msg)
        dispatch(this.logUserInFailureAction(err))
        return Promise.reject(Constants.ERRORS.ALREADY_MANAGED)
      })
      .then(user => {
        user.setToken(token)
        dispatch(this.logUserInSuccessAction(user))
      }, this.manageHttpErrors.bind(this))
    }
  }

  /**
   * Used to sign an user in
   * @param  {string} username    The user's username
   * @param  {string} mail    The user's mail
   * @param  {string} password1    The user's password1
   * @param  {string} password2 The user's password2
   * @param  {string} captcharesponse The capatcha response to send
   * @return {Object}          The action to dispatch
   */
  signUserIn (username, mail, password1, password2, captcharesponse) {
    return (dispatch, getState) => {
      const currLang = getState().i18n.locale
      return this.authService.signUserIn(username, mail, password1, password2, captcharesponse, currLang)
      .then(() => {
        const title = this.i18n.t('application.auth.signupSuccessTitle')
        const msg = this.i18n.t('application.auth.signupSuccessMessage')
        this.toastrHelper.showMessage('success', title, msg)
        dispatch(this.signUserInSuccessAction())
      }, this.manageHttpErrors.bind(this))
    }
  }

  /**
   * Disconnect an user
   * @return {Object}          The action to dispatch
   */
  disconnectUser () {
    return (dispatch, getState) => {
      const token = this.getTokenFromGetState(getState)
      return this.authService.disconnectUser(token).then(() => {
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
   * @param  {User} user    The user to return
   * @return {Object}          The action
   */
  logUserInSuccessAction (user) {
    return {
      type: Constants.ACTIONS.AUTH.LOG_USER_IN_SUCCESS,
      user
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

  /**
   * Create an action with the OPEN_LOGIN_MODAL type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   * @return {Object}          The action
   */
  openLoginModalAction () {
    return {
      type: Constants.ACTIONS.AUTH.OPEN_LOGIN_MODAL
    }
  }

  /**
   * Create an action with the CLOSE_LOGIN_MODAL type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   * @return {Object}          The action
   */
  closeLoginModalAction () {
    return {
      type: Constants.ACTIONS.AUTH.CLOSE_LOGIN_MODAL
    }
  }

  /**
   * Create an action with the OPEN_SIGNIN_MODAL type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   * @return {Object}          The action
   */
  openSignUpModalAction () {
    return {
      type: Constants.ACTIONS.AUTH.OPEN_SIGNIN_MODAL
    }
  }

  /**
   * Create an action with the CLOSE_SIGNIN_MODAL type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   * @return {Object}          The action
   */
  closeSignUpModalAction () {
    return {
      type: Constants.ACTIONS.AUTH.CLOSE_SIGNIN_MODAL
    }
  }

  /**
   * Create an action with the SIGN_USER_IN_SUCCESS type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   * @return {Object}          The action
   */
  signUserInSuccessAction (user) {
    return {
      type: Constants.ACTIONS.AUTH.SIGN_USER_IN_SUCCESS
    }
  }
}
