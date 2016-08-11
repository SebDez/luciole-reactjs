import Constants from './../constants/constants';

export function logUser(login, password) {
  return dispatch => {
   setTimeout(() => {
     dispatch(getRefreshTokenAction('My new token'))
   }, 2000)
 }
}

export function disconnectUser(router) {
  return dispatch => {
   setTimeout(() => {
     dispatch(disconnectUserAction())
     router.push('/')
   }, 2000)
 }
}

/**
 * Create an action with the SET_TOKEN_ASYNC_SUCCESS type
 * Accepts the new token to put in Redux store
 * Returns a new action that can be managed by Redux
 */
export function getRefreshTokenAction (token){
  return {
    type: Constants.SET_TOKEN_ASYNC_SUCCESS,
  token}
}


export function disconnectUserAction (){
  return {type: Constants.DISCONNECT_ASYNC_SUCCESS}
}