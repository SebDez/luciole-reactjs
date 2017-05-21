import UserPageActions from './userpage-action'
import UserService from './../service/user-service'
import TestHelper from './../../../../test/mock//test-helper'

require('sinon-as-promised')
let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
let sinon = require('sinon')
chai.use(spies)

describe('UserPageActions', () => {
  let actions

  beforeEach(() => {
    actions = new UserPageActions()
  })

  describe('openEditUsernameModalAction', () => {
    it('Expect to return OPEN_EDITUSERNAME_MODAL as action type', () => {
      expect(actions.openEditUsernameModalAction().type).to.equal('OPEN_EDITUSERNAME_MODAL')
    })
  })

  describe('closeEditUsernameModalAction', () => {
    it('Expect to return CLOSE_EDITUSERNAME_MODAL as action type', () => {
      expect(actions.closeEditUsernameModalAction().type).to.equal('CLOSE_EDITUSERNAME_MODAL')
    })
  })

  describe('editUsernameAction', () => {
    it('Expect to return EDITUSERNAME as action type', () => {
      expect(actions.editUsernameAction().type).to.equal('EDITUSERNAME')
    })

    it('Expect to return valid username param', () => {
      expect(actions.editUsernameAction('username1').username).to.equal('username1')
    })
  })

  describe('editUsername', () => {
    let mockService, mockActions, service, spy

    beforeEach(() => {
      service = new UserService()
      mockService = sinon.mock(service)
      actions.userService = service
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to return a function', () => {
      expect(typeof (actions.editUsername())).to.equal('function')
    })

    it('Expect to have call editUsername', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editUsername').resolves('newusername')
      mockActions.expects('editUsernameAction').returns('editUsernameAction-result')
      spy = chai.spy.on(actions, 'editUsername')
      actions.editUsername()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editUsername').resolves('newusername')
      mockActions.expects('editUsernameAction').returns('editUsernameAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.editUsername()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('editUsernameAction-result')
        done()
      })
    })

    it('Expect to have call editUsernameAction in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editUsername').resolves('newusername')
      mockActions.expects('editUsernameAction').returns('editUsernameAction-result')
      spy = chai.spy.on(actions, 'editUsernameAction')
      actions.editUsername()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.called.once()
        done()
      })
    })
  })
})
