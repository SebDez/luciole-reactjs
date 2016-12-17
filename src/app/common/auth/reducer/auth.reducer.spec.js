import {expect} from 'chai'
import * as AuthReducer from './auth.reducer'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('AuthReducer', () => {
  let state, action

  beforeEach(() => {
    state = {
      state: 'default-state-value',
      user: {
        token: 'my-old-fashion-token'
      }
    }
  })

  describe('logUserSuccessAction', () => {
    it('Expect to return a valid state', () => {
      action = {
        token: 'my-new-token'
      }
      const result = AuthReducer.logUserSuccessAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: 'my-new-token'
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('logUserFailureAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.logUserFailureAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: null
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('disconnectUserSuccessAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.disconnectUserSuccessAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: null
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('disconnectUserFailureAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.disconnectUserFailureAction(state, action)
      expect(result).to.deep.equal(state)
    })
  })
})
