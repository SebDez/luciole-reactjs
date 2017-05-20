import {expect} from 'chai'
import * as AuthReducer from './auth-reducer'

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
        user: {
          token: 'my-new-token',
          _id: 'my_id',
          username: 'my-username'
        }
      }
      const result = AuthReducer.logUserSuccessAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: 'my-new-token',
          _id: 'my_id',
          username: 'my-username'
        },
        modals: {
          showLoginModal: false,
          showSignUpModal: false
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
        user: null
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('disconnectUserSuccessAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.disconnectUserSuccessAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: null
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

  describe('openLoginModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.openLoginModalAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: 'my-old-fashion-token'
        },
        modals: {
          showLoginModal: true,
          showSignUpModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('closeLoginModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.closeLoginModalAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: 'my-old-fashion-token'
        },
        modals: {
          showLoginModal: false,
          showSignUpModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('openSignUpModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.openSignUpModalAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: 'my-old-fashion-token'
        },
        modals: {
          showLoginModal: false,
          showSignUpModal: true
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('closeSignUpModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.closeSignUpModalAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: 'my-old-fashion-token'
        },
        modals: {
          showLoginModal: false,
          showSignUpModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('signUserInSuccessAction', () => {
    it('Expect to return a valid state', () => {
      const result = AuthReducer.signUserInSuccessAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: {
          token: 'my-old-fashion-token'
        },
        modals: {
          showLoginModal: false,
          showSignUpModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
