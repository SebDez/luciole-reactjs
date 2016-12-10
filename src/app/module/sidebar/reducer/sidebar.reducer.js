import Constants from './../../../common/constants'
import objectAssign from 'object-assign'
import initialState from './../../../store/initialState'
import LucioleReducer from './../../../common/core/abstract/luciole-reducer'

// Initialize Reducer
const SidebarReducer = new LucioleReducer(initialState.module.sidebar)

// Register actions
SidebarReducer.registerAction(Constants.ACTIONS.SIDEBAR.OPEN_SIDEBAR, openSidebarAction)
SidebarReducer.registerAction(Constants.ACTIONS.SIDEBAR.CLOSE_SIDEBAR, closeSidebarAction)
SidebarReducer.registerAction(Constants.ACTIONS.RESOURCE.GET_RESOURCES_SUCCESS, getResourceSuccessAction)

/* *****************************
* ACTION CALLBACKS
* *****************************/

/**
 * Change state to open sidebar
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function openSidebarAction (state) {
  return objectAssign({}, state, {open: true})
}

/**
 * Change state to close sidebar
 * @param  {Object} state The state to use
 * @return {Object}       The new state
 */
export function closeSidebarAction (state) {
  return objectAssign({}, state, {open: false})
}

export function getResourceSuccessAction (state, action) {
  return objectAssign({}, state, {userResource: action.resources})
}

// Export the reducer
export default SidebarReducer.reduce
