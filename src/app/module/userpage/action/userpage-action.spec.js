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

  describe('openEditPersonalDatasModalAction', () => {
    it('Expect to return OPEN_EDITPERSONALDATAS_MODAL as action type', () => {
      expect(actions.openEditPersonalDatasModalAction().type).to.equal('OPEN_EDITPERSONALDATAS_MODAL')
    })
  })

  describe('closeEditPersonalDatasModalAction', () => {
    it('Expect to return CLOSE_EDITPERSONALDATAS_MODAL as action type', () => {
      expect(actions.closeEditPersonalDatasModalAction().type).to.equal('CLOSE_EDITPERSONALDATAS_MODAL')
    })
  })

  describe('openEditAvatarModalAction', () => {
    it('Expect to return OPEN_EDITAVATAR_MODAL as action type', () => {
      expect(actions.openEditAvatarModalAction().type).to.equal('OPEN_EDITAVATAR_MODAL')
    })
  })

  describe('closeEditAvatarModalAction', () => {
    it('Expect to return CLOSE_EDITAVATAR_MODAL as action type', () => {
      expect(actions.closeEditAvatarModalAction().type).to.equal('CLOSE_EDITAVATAR_MODAL')
    })
  })

  describe('editPersonalDatasAction', () => {
    it('Expect to return EDITPERSONALDATAS as action type', () => {
      expect(actions.editPersonalDatasAction().type).to.equal('EDITPERSONALDATAS')
    })

    it('Expect to return valid birthDate param', () => {
      expect(actions.editPersonalDatasAction('birthDate1', 'gender1', 'country1', 'region1').birthDate).to.equal('birthDate1')
    })

    it('Expect to return valid gender param', () => {
      expect(actions.editPersonalDatasAction('birthDate1', 'gender1', 'country1', 'region1').gender).to.equal('gender1')
    })

    it('Expect to return valid country param', () => {
      expect(actions.editPersonalDatasAction('birthDate1', 'gender1', 'country1', 'region1').country).to.equal('country1')
    })

    it('Expect to return valid region param', () => {
      expect(actions.editPersonalDatasAction('birthDate1', 'gender1', 'country1', 'region1').region).to.equal('region1')
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

  describe('editPersonalDatas', () => {
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
      expect(typeof (actions.editPersonalDatas())).to.equal('function')
    })

    it('Expect to have call editPersonalDatas', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editPersonalDatas').resolves('newdatas')
      mockActions.expects('editPersonalDatasAction').returns('editPersonalDatasAction-result')
      spy = chai.spy.on(actions, 'editPersonalDatas')
      actions.editPersonalDatas()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editPersonalDatas').resolves('newdatas')
      mockActions.expects('editPersonalDatasAction').returns('editPersonalDatasAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.editPersonalDatas()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('editPersonalDatasAction-result')
        done()
      })
    })

    it('Expect to have call editPersonalDatasAction in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editPersonalDatas').resolves('newdatas')
      mockActions.expects('editPersonalDatasAction').returns('editPersonalDatasAction-result')
      spy = chai.spy.on(actions, 'editPersonalDatasAction')
      actions.editPersonalDatas()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.called.once()
        done()
      })
    })
  })

  describe('editAvatar', () => {
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
      expect(typeof (actions.editAvatar())).to.equal('function')
    })

    it('Expect to have call editAvatar', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editAvatar').resolves('newdatas')
      mockActions.expects('editAvatarAction').returns('editAvatarAction-result')
      spy = chai.spy.on(actions, 'editAvatar')
      actions.editAvatar()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editAvatar').resolves('newdatas')
      mockActions.expects('editAvatarAction').returns('editAvatarAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.editAvatar()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('editAvatarAction-result')
        done()
      })
    })

    it('Expect to have call editAvatarAction in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('editAvatar').resolves('newdatas')
      mockActions.expects('editAvatarAction').returns('editAvatarAction-result')
      spy = chai.spy.on(actions, 'editAvatarAction')
      actions.editAvatar()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.called.once()
        done()
      })
    })
  })

  describe('editAvatarAction', () => {
    it('Expect to return EDITAVATAR as action type', () => {
      expect(actions.editAvatarAction().type).to.equal('EDITAVATAR')
    })

    it('Expect to return valid username param', () => {
      expect(actions.editAvatarAction('avatar1').avatar).to.equal('avatar1')
    })
  })

  describe('getAvatarList', () => {
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
      expect(typeof (actions.getAvatarList())).to.equal('function')
    })

    it('Expect to have call getAvatarList', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('getAvatarList').resolves('newdatas')
      mockActions.expects('getAvatarListAction').returns('getAvatarListAction-result')
      spy = chai.spy.on(actions, 'getAvatarList')
      actions.getAvatarList()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('getAvatarList').resolves('newdatas')
      mockActions.expects('getAvatarListAction').returns('getAvatarListAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.getAvatarList()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('getAvatarListAction-result')
        done()
      })
    })

    it('Expect to have call getAvatarListAction in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('getAvatarList').resolves('newdatas')
      mockActions.expects('getAvatarListAction').returns('getAvatarListAction-result')
      spy = chai.spy.on(actions, 'getAvatarListAction')
      actions.getAvatarList()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.called.once()
        done()
      })
    })
  })

  describe('getAvatarListAction', () => {
    it('Expect to return GETAVATARLIST as action type', () => {
      expect(actions.getAvatarListAction().type).to.equal('GETAVATARLIST')
    })

    it('Expect to return valid username param', () => {
      expect(actions.getAvatarListAction('avatarList1').avatarList).to.equal('avatarList1')
    })
  })
})
