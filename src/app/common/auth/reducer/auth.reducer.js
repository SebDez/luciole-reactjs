import Constants from './../../../common/constants'
import objectAssign from 'object-assign'
import initialState from './../../../store/initialState'

const handleActions = {
  [Constants.ACTIONS.AUTH.LOG_USER_IN_SUCCESS]: (state, action) => {
    return objectAssign({}, state, {user: {token: action.token}})
  },
  [Constants.ACTIONS.AUTH.LOG_USER_IN_FAILURE]: (state) => {
    return objectAssign({}, state, {user: {token: null}})
  },
  [Constants.ACTIONS.AUTH.DISCONNECT_USER_SUCCESS]: (state, action) => {
    return objectAssign({}, state, {user: {token: null}})
  },
  [Constants.ACTIONS.AUTH.DISCONNECT_USER_FAILURE]: (state) => {
    return objectAssign({}, state)
  }
}

/**
 * Set new state according to action, if no existing action, set default state
 * @param {Object} [state=initialState] The state to set, default is initialState
 * @param {Object} action               The action to use
 */
const AuthReducer = (state = initialState.auth, action) => {
  return handleActions[action.type] ? handleActions[action.type](state, action) : state
}

export default AuthReducer
