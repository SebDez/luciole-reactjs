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
        showEditUsernameModal: 'something',
        showEditPersonalDatasModal: 'somethingelse'
      }
    }
  })

  describe('openEditUsernameModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.openEditUsernameModalAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: true,
          showEditPersonalDatasModal: 'somethingelse'
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
          showEditUsernameModal: false,
          showEditPersonalDatasModal: 'somethingelse'
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
          showEditUsernameModal: false,
          showEditPersonalDatasModal: 'somethingelse'
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('openEditPersonalDatasModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.openEditPersonalDatasModalAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: 'something',
          showEditPersonalDatasModal: true
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('closeEditPersonalDatasModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.closeEditPersonalDatasModalAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: 'something',
          showEditPersonalDatasModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('editPersonalDatasAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.editPersonalDatasAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: 'something',
          showEditPersonalDatasModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
