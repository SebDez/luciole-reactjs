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
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.OPEN_EDITPERSONALDATAS_MODAL, openEditPersonalDatasModalAction)
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.CLOSE_EDITPERSONALDATAS_MODAL, closeEditPersonalDatasModalAction)
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.EDITPERSONALDATAS, editPersonalDatasAction)
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.OPEN_EDITAVATAR_MODAL, openEditAvatarModalAction)
UserPageReducer.registerAction(Constants.ACTIONS.USERPAGE.CLOSE_EDITAVATAR_MODAL, closeEditAvatarModalAction)

/* *****************************
* ACTION CALLBACKS
* *****************************/

/**
 * Change state to open edit username modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openEditUsernameModalAction (state) {
  const modals = objectAssign({}, state.modals, {showEditUsernameModal: true})
  return objectAssign({}, state, {modals})
}

/**
 * Change state to close edit username modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeEditUsernameModalAction (state) {
  const modals = objectAssign({}, state.modals, {showEditUsernameModal: false})
  return objectAssign({}, state, {modals})
}

/**
 * Change state to manage username's edition
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function editUsernameAction (state) {
  const modals = objectAssign({}, state.modals, {showEditUsernameModal: false})
  return objectAssign({}, state, {modals})
}

/**
 * Change state to open edit personal datas modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openEditPersonalDatasModalAction (state) {
  const modals = objectAssign({}, state.modals, {showEditPersonalDatasModal: true})
  return objectAssign({}, state, {modals})
}

/**
 * Change state to close edit personal datas modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeEditPersonalDatasModalAction (state) {
  const modals = objectAssign({}, state.modals, {showEditPersonalDatasModal: false})
  return objectAssign({}, state, {modals})
}

/**
 * Change state to manage username's personal datas
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function editPersonalDatasAction (state) {
  const modals = objectAssign({}, state.modals, {showEditPersonalDatasModal: false})
  return objectAssign({}, state, {modals})
}

/**
 * Change state to open edit avatar modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openEditAvatarModalAction (state) {
  const modals = objectAssign({}, state.modals, {showEditAvatarModal: true})
  return objectAssign({}, state, {modals})
}

/**
 * Change state to close edit avatar modal
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeEditAvatarModalAction (state) {
  const modals = objectAssign({}, state.modals, {showEditAvatarModal: false})
  return objectAssign({}, state, {modals})
}

// Export the reducer
export default UserPageReducer.reduce
