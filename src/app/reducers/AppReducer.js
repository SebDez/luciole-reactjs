import Constants from './../constants/constants';
import objectAssign from 'object-assign';
import initialState from './../store/initialState';

const handleActions = {
  ['openmodal']: (state) => {
    return objectAssign({}, state, {auth:{isLoginModalOpen:true}});
  },
  ['closemodal']: (state) => {
    return objectAssign({}, state, {auth:{isLoginModalOpen:false}});
  }
}

const AppReducer = (state = initialState.app , action) => {
  return handleActions[action.type] ? handleActions[action.type](state, action) : state
}

export default AppReducer
