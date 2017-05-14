import Constants from './../../../common/constants'
import objectAssign from 'object-assign'
import initialState from './../../../store/initialState'
import LucioleReducer from './../../core/abstract/luciole-reducer'

// Initialize Reducer
const AuthReducer = new LucioleReducer(initialState.application.auth)

// Register actions
AuthReducer.registerAction(Constants.ACTIONS.AUTH.LOG_USER_IN_SUCCESS, logUserSuccessAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.LOG_USER_IN_FAILURE, logUserFailureAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.DISCONNECT_USER_SUCCESS, disconnectUserSuccessAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.DISCONNECT_USER_FAILURE, disconnectUserFailureAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.OPEN_LOGIN_MODAL, openLoginModalAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.CLOSE_LOGIN_MODAL, closeLoginModalAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.OPEN_SIGNIN_MODAL, openSignInModalAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.CLOSE_SIGNIN_MODAL, closeSignInModalAction)
AuthReducer.registerAction(Constants.ACTIONS.AUTH.SIGN_USER_IN_SUCCESS, signUserInSuccessAction)

/* *****************************
* ACTION CALLBACKS
* *****************************/

/**
 * Change state to manage user sign up success
 * @param  {Object} state The state to use
 * @param  {Object} action The action params
 * @return {Object}       The new state
 */
export function logUserSuccessAction (state, action) {
  return objectAssign({}, state, {user: action.user, modals: {showLoginModal: false, showSignInModal: false}})
}

/**
 * Change state to manage user sign up failure
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function logUserFailureAction (state) {
  return objectAssign({}, state, {user: null})
}

/**
 * Change state to manage user disconnection success
 * @param  {Object} state The state to use
 * @param  {Object} action The action params
 * @return {Object}       The new state
 */
export function disconnectUserSuccessAction (state, action) {
  return objectAssign({}, state, {user: null})
}

/**
 * Change state to manage user disconnection failure
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function disconnectUserFailureAction (state) {
  return objectAssign({}, state)
}

/**
 * Change state to open login modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openLoginModalAction (state) {
  return objectAssign({}, state, {modals: {showLoginModal: true, showSignInModal: false}})
}

/**
 * Change state to close login modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeLoginModalAction (state) {
  return objectAssign({}, state, {modals: {showLoginModal: false, showSignInModal: false}})
}

/**
 * Change state to open the signin modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openSignInModalAction (state) {
  return objectAssign({}, state, {modals: {showLoginModal: false, showSignInModal: true}})
}

/**
 * Change state to close signin modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeSignInModalAction (state) {
  return objectAssign({}, state, {modals: {showLoginModal: false, showSignInModal: false}})
}

/**
 * Change state after signin success
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function signUserInSuccessAction (state) {
  return objectAssign({}, state, {modals: {showLoginModal: false, showSignInModal: false}})
}

// Export the reducer
export default AuthReducer.reduce
