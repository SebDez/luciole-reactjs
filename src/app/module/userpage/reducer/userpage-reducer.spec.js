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
        showEditPersonalDatasModal: 'somethingelse',
        showEditAvatarModal: 'somethingelse'
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
          showEditPersonalDatasModal: 'somethingelse',
          showEditAvatarModal: 'somethingelse'
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
          showEditPersonalDatasModal: 'somethingelse',
          showEditAvatarModal: 'somethingelse'
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
          showEditPersonalDatasModal: 'somethingelse',
          showEditAvatarModal: 'somethingelse'
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
          showEditPersonalDatasModal: true,
          showEditAvatarModal: 'somethingelse'
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
          showEditPersonalDatasModal: false,
          showEditAvatarModal: 'somethingelse'
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
          showEditPersonalDatasModal: false,
          showEditAvatarModal: 'somethingelse'
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('openEditAvatarModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.openEditAvatarModalAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: 'something',
          showEditPersonalDatasModal: 'somethingelse',
          showEditAvatarModal: true
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('closeEditAvatarModalAction', () => {
    it('Expect to return a valid state', () => {
      const result = UserPageReducer.closeEditAvatarModalAction(state)
      const expected = {
        state: 'default-state-value',
        modals: {
          showEditUsernameModal: 'something',
          showEditPersonalDatasModal: 'somethingelse',
          showEditAvatarModal: false
        }
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
