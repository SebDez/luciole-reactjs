import {expect} from 'chai'
import * as UserPageReducer from './userpage-reducer'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('UserPageReducer', () => {
  let state

  beforeEach(() => {
    state = {
      state: 'default-state-value',
      modals: {
        showEditUsernameModal: 'something'
      }
    }
  })

  describe('openEditUsernameModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.openEditUsernameModalAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: true
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('closeEditUsernameModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.closeEditUsernameModalAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('editUsernameAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.editUsernameAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
