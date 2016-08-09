import Constants from './../constants/constants';
import request from 'superagent';

export function logUser(login, password) {
  return dispatch => {
   setTimeout(() => {
     dispatch(getRefreshTokenAction('My new token'))
   }, 2000)
 }
}

/**
 * Create an action with the SET_TOKEN_ASYNC_SUCCESS type
 * Accepts the new token to put in Redux store
 * Returns a new action that can be managed by Redux
 */
const getRefreshTokenAction = token => {
  return {
    type: Constants.SET_TOKEN_ASYNC_SUCCESS,
  token}
}
