import Constants from './../../../common/constants'
import objectAssign from 'object-assign'
import initialState from './../../../store/initialState'

const handleActions = {
  [Constants.ACTIONS.SIDEBAR.OPEN_SIDEBAR]: (state) => {
    return objectAssign({}, state, {open: true})
  },
  [Constants.ACTIONS.SIDEBAR.CLOSE_SIDEBAR]: (state) => {
    return objectAssign({}, state, {open: false})
  }
}

/**
 * Set new state according to action, if no existing action, set default state
 * @param {Object} [state=initialState] The state to set, default is initialState
 * @param {Object} action               The action to use
 */
const SidebarReducer = (state = initialState.module.sidebar, action) => {
  return handleActions[action.type] ? handleActions[action.type](state, action) : state
}

export default SidebarReducer
