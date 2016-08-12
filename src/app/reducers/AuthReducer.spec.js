import AuthReducer from './AuthReducer';

import {expect} from 'chai';

describe('AuthReducer', () => {

    let state, action;

    beforeEach(()=>{
      state = {user:{token:'notset'}};
      action = {};
    })

    describe('AuthReducer', () => {
      it('Should return the state if no action type matching', () => {
        expect(AuthReducer(state, action).user.token).to.equals('notset');
      });
    });

    describe('SET_TOKEN_ASYNC_SUCCESS', () => {
      it('Should return a new state with user token ', () => {
        action={type:'SET_TOKEN_ASYNC_SUCCESS', token:'mytoken'};
        expect(AuthReducer(state, action).user.token).to.equals('mytoken');
      });
    });

    describe('DISCONNECT_ASYNC_SUCCESS', () => {
      it('Should return a new state without user token ', () => {
        action={type:'DISCONNECT_ASYNC_SUCCESS'};
        expect(AuthReducer(state, action).user.token).to.equals(null);
      });
    });

});
