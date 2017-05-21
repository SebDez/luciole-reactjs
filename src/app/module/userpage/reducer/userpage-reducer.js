import Constants from './../../../common/constants'
import objectAssign from 'object-assign'
import initialState from './../../../store/initialState'
import LucioleReducer from './../../../common/core/abstract/luciole-reducer'

// Initialize Reducer
const UserPageReducer = new LucioleReducer(initialState.application.module.userpage)

// Register actions
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.OPEN_EDITUSERNAME_MODAL, openEditUsernameModalAction)
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.CLOSE_EDITUSERNAME_MODAL, closeEditUsernameModalAction)
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.EDITUSERNAME, editUsernameAction)

/* *****************************
* ACTION CALLBACKS
* *****************************/

/**
 * Change state to open sidebar
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openEditUsernameModalAction (state) {
  return objectAssign({}, state, {modals: {showEditUsernameModal: true}})
}

/**
 * Change state to close sidebar
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeEditUsernameModalAction (state) {
  return objectAssign({}, state, {modals: {showEditUsernameModal: false}})
}

/**
 * Change state to manage username's edition
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function editUsernameAction (state) {
  return objectAssign({}, state, {modals: {showEditUsernameModal: false}})
}

// Export the reducer
export default UserPageReducer.reduce
