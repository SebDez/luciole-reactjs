import {expect} from 'chai'
import * as MainReducer from './main.reducer'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('MainReducer', () => {
  let state, action

  beforeEach(() => {
    state = {
      state: 'default-state-value',
      user: 'toto'
    }
  })

  describe('getUserInformationsSuccessAction', () => {
    it('Expect to return a valid state', () => {
      action = {
        user: 'my-new-user'
      }
      const result = MainReducer.getUserInformationsSuccessAction(state, action)
      const expected = {
        state: 'default-state-value',
        user: 'my-new-user'
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
