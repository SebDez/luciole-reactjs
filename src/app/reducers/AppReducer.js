import Constants from './../constants/constants';
import objectAssign from 'object-assign';
import initialState from './../store/initialState';

const handleActions = {
}

const AppReducer = (state = initialState , action) => {
  return handleActions[action.type] ? handleActions[action.type](state, action) : state
}

export default AppReducer
