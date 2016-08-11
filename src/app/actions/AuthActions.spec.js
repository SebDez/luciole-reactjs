import { expect } from 'chai';
import * as actions from './AuthActions';
import sinon from 'sinon';

describe('AuthActions', () => {

  describe('logUser', () => {
    //@TODO
  });

  describe('getRefreshTokenAction ', () => {
    it('should create an action to get token', () => {
      const expected = {
        type: 'SET_TOKEN_ASYNC_SUCCESS',
        token: 'mytoken'
      };

      expect(actions.getRefreshTokenAction('mytoken')).to.deep.equal(expected);
    });
  });

});