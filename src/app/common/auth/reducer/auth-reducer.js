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
  return objectAssign({}, state, {user: {token: action.token}})
}

/**
 * Change state to manage user sign up failure
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function logUserFailureAction (state) {
  return objectAssign({}, state, {user: {token: null}})
}

/**
 * Change state to manage user disconnection success
 * @param  {Object} state The state to use
 * @param  {Object} action The action params
 * @return {Object}       The new state
 */
export function disconnectUserSuccessAction (state, action) {
  return objectAssign({}, state, {user: {token: null}})
}

/**
 * Change state to manage user disconnection failure
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function disconnectUserFailureAction (state) {
  return objectAssign({}, state)
}

// Export the reducer
export default AuthReducer.reduce
