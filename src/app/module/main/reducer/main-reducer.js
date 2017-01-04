import Constants from './../../../common/constants'
import objectAssign from 'object-assign'
import initialState from './../../../store/initialState'
import LucioleReducer from './../../../common/core/abstract/luciole-reducer'

// Initialize Reducer
const MainReducer = new LucioleReducer(initialState.module.main)

// Register actions
MainReducer.registerAction(Constants.ACTIONS.USER.GET_USER_INFORMATIONS, getUserInformationsSuccessAction)
MainReducer.registerAction(Constants.ACTIONS.MAIN.OPEN_LANGUAGE_CARD, openLanguageCardAction)
MainReducer.registerAction(Constants.ACTIONS.MAIN.CLOSE_LANGUAGE_CARD, closeLanguageCardAction)

/* *****************************
* ACTION CALLBACKS
* *****************************/

/**
 * Set new user informations
 * @param  {Object} state  The state to use
 * @param  {Object} action The action content
 * @return {Object}        The new state
 */
export function getUserInformationsSuccessAction (state, action) {
  return objectAssign({}, state, {user: action.user})
}

/**
 * Change state to open the language card
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openLanguageCardAction (state) {
  return objectAssign({}, state, {modals: {lang: {open: true}}})
}

/**
 * Change state to close the language card
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeLanguageCardAction (state) {
  return objectAssign({}, state, {modals: {lang: {open: false}}})
}

// Export the reducer
export default MainReducer.reduce
