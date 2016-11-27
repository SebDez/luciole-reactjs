import initialState from './store/initialState'

const handleActions = {}

/**
 * Set new state according to action, if no existing action, set default state
 * @param {Object} [state=initialState] The state to set, default is initialState
 * @param {Object} action               The action to use
 */
const AppReducer = (state = initialState, action) => {
  return handleActions[action.type] ? handleActions[action.type](state, action) : state
}

export default AppReducer
