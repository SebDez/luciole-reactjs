import AuthAction from './auth-action'
import AuthService from './../service/auth-service'
import TestHelper from './../../../../test/mock/test-helper'
import UserService from './../../../module/userpage/service/user-service'
import User from './../../../module/userpage/service/model/user-model'

require('sinon-as-promised')
let chai = require('chai')
let sinon = require('sinon')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('AuthAction', () => {
  let actions

  beforeEach(() => {
    actions = new AuthAction()
    actions.toastrHelper = {
      showMessage: () => 0
    }
    actions.i18n = {
      t: () => 'mytext'
    }
  })

  describe('logUserInSuccessAction', () => {
    it('Expect to return LOG_USER_IN_SUCCESS as action type', () => {
      expect(actions.logUserInSuccessAction('my-token').type).to.equal('LOG_USER_IN_SUCCESS')
    })
    it('Expect to return the given user as action param', () => {
      expect(actions.logUserInSuccessAction('my-user').user).to.equal('my-user')
    })
  })

  describe('logUserInFailureAction', () => {
    it('Expect to return LOG_USER_IN_FAILURE as action type', () => {
      expect(actions.logUserInFailureAction('my-err').type).to.equal('LOG_USER_IN_FAILURE')
    })
    it('Expect to return the given error as action param', () => {
      expect(actions.logUserInFailureAction('my-err').err).to.equal('my-err')
    })
  })

  describe('disconnectUserInSuccessAction', () => {
    it('Expect to return DISCONNECT_USER_SUCCESS as action type', () => {
      expect(actions.disconnectUserInSuccessAction().type).to.equal('DISCONNECT_USER_SUCCESS')
    })
  })

  describe('disconnectUserInFailureAction', () => {
    it('Expect to return DISCONNECT_USER_FAILURE as action type', () => {
      expect(actions.disconnectUserInFailureAction('my-err').type).to.equal('DISCONNECT_USER_FAILURE')
    })
    it('Expect to return the given error as action param', () => {
      expect(actions.disconnectUserInFailureAction('my-err').err).to.equal('my-err')
    })
  })

  describe('logUserIn', () => {
    let mockService, mockUsrServ, mockActions, service, usrService, spy
    const data = 'my-token'

    const usrData = new User({username: 'my-username', mail: 'my-mail'})

    beforeEach(() => {
      service = new AuthService()
      mockService = sinon.mock(service)
      actions.authService = service
      mockActions = sinon.mock(actions)
      usrService = new UserService()
      mockUsrServ = sinon.mock(usrService)
      actions.userService = usrService
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockActions.verify()
      mockActions.restore()
      mockUsrServ.verify()
      mockUsrServ.restore()
    })

    it('Expect to return a function', () => {
      expect(typeof (actions.logUserIn('my-login', 'my-password'))).to.equal('function')
    })

    it('Expect to have call logUserIn with good params', (done) => {
      mockService.expects('logUserIn').resolves(data)
      mockUsrServ.expects('getUserProfile').resolves(usrData)
      mockActions.expects('logUserInSuccessAction').returns('logUserInSuccessAction-result')
      spy = chai.spy.on(actions.authService, 'logUserIn')
      actions.logUserIn('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('my-login', 'my-password')
        done()
      })
    })

    it('Expect to have call getUserProfile with good params', (done) => {
      mockService.expects('logUserIn').resolves(data)
      mockUsrServ.expects('getUserProfile').resolves(usrData)
      mockActions.expects('logUserInSuccessAction').returns('logUserInSuccessAction-result')
      spy = chai.spy.on(actions.userService, 'getUserProfile')
      actions.logUserIn('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('my-token')
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockService.expects('logUserIn').resolves(data)
      mockUsrServ.expects('getUserProfile').resolves(usrData)
      mockActions.expects('logUserInSuccessAction').returns('logUserInSuccessAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.logUserIn('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('logUserInSuccessAction-result')
        done()
      })
    })

    it('Expect to have call logUserInSuccessAction with good params in case of success', (done) => {
      mockService.expects('logUserIn').resolves(data)
      mockUsrServ.expects('getUserProfile').resolves(usrData)
      mockActions.expects('logUserInSuccessAction').returns('logUserInSuccessAction-result')
      spy = chai.spy.on(actions, 'logUserInSuccessAction')
      actions.logUserIn('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with(usrData)
        done()
      })
    })

    it('Expect to have call dispatch with error value in case of failure', (done) => {
      mockService.expects('logUserIn').resolves(Promise.reject('error'))
      mockActions.expects('logUserInFailureAction').returns('logUserInFailureAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.logUserIn('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('logUserInFailureAction-result')
        done()
      })
    })

    it('Expect to have call logUserInFailureAction with good params in case of failure', (done) => {
      mockService.expects('logUserIn').resolves(Promise.reject('error'))
      mockActions.expects('logUserInFailureAction').returns('logUserInFailureAction-result')
      spy = chai.spy.on(actions, 'logUserInFailureAction')
      actions.logUserIn('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('error')
        done()
      })
    })

    it('Expect to have call toastrHelper showMessage in case of failure', (done) => {
      mockService.expects('logUserIn').resolves(Promise.reject('error'))
      spy = chai.spy.on(actions.toastrHelper, 'showMessage')
      actions.logUserIn('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called()
        done()
      })
    })
  })

  describe('disconnectUser', () => {
    let mockService, mockActions, service, spy

    beforeEach(() => {
      service = new AuthService()
      mockService = sinon.mock(service)
      actions.authService = service
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to return a function', () => {
      expect(typeof (actions.disconnectUser())).to.equal('function')
    })

    it('Expect to have call disconnectUser', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('disconnectUser').resolves()
      mockActions.expects('disconnectUserInSuccessAction').returns('disconnectUserInSuccessAction-result')
      spy = chai.spy.on(actions, 'disconnectUser')
      actions.disconnectUser()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('disconnectUser').resolves()
      mockActions.expects('disconnectUserInSuccessAction').returns('disconnectUserInSuccessAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.disconnectUser()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('disconnectUserInSuccessAction-result')
        done()
      })
    })

    it('Expect to have call disconnectUserInSuccessAction in case of success', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('disconnectUser').resolves()
      mockActions.expects('disconnectUserInSuccessAction').returns('disconnectUserInSuccessAction-result')
      spy = chai.spy.on(actions, 'disconnectUserInSuccessAction')
      actions.disconnectUser()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with error value in case of failure', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('disconnectUser').resolves(Promise.reject('error'))
      mockActions.expects('disconnectUserInFailureAction').returns('disconnectUserInFailureAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.disconnectUser()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('disconnectUserInFailureAction-result')
        done()
      })
    })

    it('Expect to have call disconnectUserInFailureAction with good params in case of failure', (done) => {
      mockActions.expects('getTokenFromGetState').resolves('mytoken')
      mockService.expects('disconnectUser').resolves(Promise.reject('error'))
      mockActions.expects('disconnectUserInFailureAction').returns('disconnectUserInFailureAction-result')
      spy = chai.spy.on(actions, 'disconnectUserInFailureAction')
      actions.disconnectUser()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('error')
        done()
      })
    })
  })

  describe('openLoginModalAction', () => {
    it('Expect to return OPEN_LOGIN_MODAL as action type', () => {
      expect(actions.openLoginModalAction().type).to.equal('OPEN_LOGIN_MODAL')
    })
  })

  describe('closeLoginModalAction', () => {
    it('Expect to return CLOSE_LOGIN_MODAL as action type', () => {
      expect(actions.closeLoginModalAction().type).to.equal('CLOSE_LOGIN_MODAL')
    })
  })

  describe('openSignUpModalAction', () => {
    it('Expect to return OPEN_SIGNIN_MODAL as action type', () => {
      expect(actions.openSignUpModalAction().type).to.equal('OPEN_SIGNIN_MODAL')
    })
  })

  describe('closeSignUpModalAction', () => {
    it('Expect to return CLOSE_SIGNIN_MODAL as action type', () => {
      expect(actions.closeSignUpModalAction().type).to.equal('CLOSE_SIGNIN_MODAL')
    })
  })

  describe('signUserInSuccessAction', () => {
    it('Expect to return SIGN_USER_IN_SUCCESS as action type', () => {
      expect(actions.signUserInSuccessAction().type).to.equal('SIGN_USER_IN_SUCCESS')
    })
  })

  describe('signUserIn', () => {
    let mockService, mockActions, service, spy

    beforeEach(() => {
      service = new AuthService()
      mockService = sinon.mock(service)
      actions.authService = service
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to return a function', () => {
      expect(typeof (actions.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse', 'fr'))).to.equal('function')
    })

    it('Expect to have call signUserIn with good params', (done) => {
      mockService.expects('signUserIn').resolves({})
      mockActions.expects('signUserInSuccessAction').returns('signUserInSuccessAction-result')
      spy = chai.spy.on(actions.authService, 'signUserIn')
      actions.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse')(TestHelper.dispatch, TestHelper.getState).then(() => {
        expect(spy).to.have.been.called.with('username', 'mail', 'password1', 'password2', 'captcharesponse', 'my-lang')
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockService.expects('signUserIn').resolves({})
      mockActions.expects('signUserInSuccessAction').returns('signUserInSuccessAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse')(TestHelper.dispatch, TestHelper.getState).then(() => {
        expect(spy).to.have.been.called.with('signUserInSuccessAction-result')
        done()
      })
    })

    it('Expect to have call signUserInSuccessAction with good params in case of success', (done) => {
      mockService.expects('signUserIn').resolves({})
      mockActions.expects('signUserInSuccessAction').returns('signUserInSuccessAction-result')
      spy = chai.spy.on(actions, 'signUserInSuccessAction')
      actions.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse')(TestHelper.dispatch, TestHelper.getState).then(() => {
        expect(spy).to.have.been.called.once
        done()
      })
    })

    it('Expect to have call toastrHelper showMessage in case of success', (done) => {
      mockService.expects('signUserIn').resolves({})
      mockActions.expects('signUserInSuccessAction').returns('signUserInSuccessAction-result')
      spy = chai.spy.on(actions.toastrHelper, 'showMessage')
      actions.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse')(TestHelper.dispatch, TestHelper.getState).then(() => {
        expect(spy).to.have.been.called()
        done()
      })
    })
  })
})
