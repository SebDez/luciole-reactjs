import Constants from './../constants/constants';
import objectAssign from 'object-assign';
import initialState from './../store/initialState';

const handleActions = {
  [Constants.SET_TOKEN_ASYNC_SUCCESS]: (state, action) => {
    return objectAssign({}, state, {user:{token:action.token}});
  },
  [Constants.DISCONNECT_ASYNC_SUCCESS]: (state) => {
    return objectAssign({}, state, {user:{token:null}});
  }
}

const AuthReducer = (state = initialState , action) => {
  return handleActions[action.type] ? handleActions[action.type](state, action) : state
}

export default AuthReducer
