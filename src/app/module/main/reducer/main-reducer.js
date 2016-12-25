import Constants from './../../../common/constants'
import objectAssign from 'object-assign'
import initialState from './../../../store/initialState'
import LucioleReducer from './../../../common/core/abstract/luciole-reducer'

// Initialize Reducer
const MainReducer = new LucioleReducer(initialState.module.main)

// Register actions
MainReducer.registerAction(Constants.ACTIONS.USER.GET_USER_INFORMATIONS, getUserInformationsSuccessAction)

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

// Export the reducer
export default MainReducer.reduce
