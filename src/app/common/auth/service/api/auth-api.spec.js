import {expect} from 'chai'
import AuthApi from './auth-api'
import MockRequestHelper from './../../../../../test/mock/mock-request-helper'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('AuthApi', () => {
  describe('logUserIn', () => {
    var serv, rHelper, mockService, mockRequestHelper

    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new AuthApi()
      mockRequestHelper = sinon.mock(rHelper)
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockRequestHelper.verify()
      mockRequestHelper.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('post').resolves(response)
      expect(serv.logUserIn('login', 'password')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call post method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('encodeLogData').returns('encodedLogData')
      let response = {body: {}}
      mockRequestHelper.expects('post').resolves(response)
      let spy = chai.spy.on(rHelper, 'post')
      let uri = 'endpoint/oauth2/token/owner'
      serv.logUserIn('login', 'password').then(() => {
        expect(spy).to.have.been.called.with(uri, 'encodedLogData')
        done()
      })
    })

    it('Expect to have call decodeToken', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('encodeLogData').returns('encodedLogData')
      let response = {body: {}}
      mockRequestHelper.expects('post').resolves(response)
      let spy = chai.spy.on(serv, 'decodeToken')
      serv.logUserIn('login', 'password').then(() => {
        expect(spy).to.have.been.called.with(response.body)
        done()
      })
    })

    it('Expect to resolve the token', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('encodeLogData').returns('encodedLogData')
      let response = {body: {access_token: 'mytoken'}}
      mockRequestHelper.expects('post').resolves(response)
      serv.logUserIn('login', 'password').then(res => {
        expect(res).to.equal('mytoken')
        done()
      })
    })
  })

  describe('signUserIn', () => {
    var serv, rHelper, mockService, mockRequestHelper

    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new AuthApi()
      mockRequestHelper = sinon.mock(rHelper)
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockRequestHelper.verify()
      mockRequestHelper.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('post').resolves(response)
      expect(serv.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse').then).to.be.an.instanceof(Function)
    })

    it('Expect to have call post method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('encodeSignInData').returns('encodedSignInData')
      let response = {body: {}}
      mockRequestHelper.expects('post').resolves(response)
      let spy = chai.spy.on(rHelper, 'post')
      let uri = 'endpoint/v1/users'
      serv.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse').then(() => {
        expect(spy).to.have.been.called.with(uri, 'encodedSignInData')
        done()
      })
    })
  })

  describe('disconnectUser', () => {
    var serv, rHelper, mockService

    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new AuthApi()
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      expect(serv.disconnectUser('mytoken')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call post method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let spy = chai.spy.on(rHelper, 'post')
      let uri = 'endpoint/v1/logout?access_token=mytoken'
      serv.disconnectUser('mytoken').then(() => {
        expect(spy).to.have.been.called.with(uri)
        done()
      })
    })
  })

  describe('encodeLogData', () => {
    var serv
    beforeEach(() => {
      serv = new AuthApi()
    })

    it('Expect to return an object with valid username', () => {
      expect(serv.encodeLogData('login', 'password').username).to.equals('login')
    })

    it('Expect to return an object with valid password', () => {
      expect(serv.encodeLogData('login', 'password').password).to.equals('password')
    })

    it('Expect to return an object with valid client_id', () => {
      expect(serv.encodeLogData('login', 'password').client_id).to.equals('consumer2')
    })

    it('Expect to return an object with valid grant_type', () => {
      expect(serv.encodeLogData('login', 'password').grant_type).to.equals('password')
    })
  })

  describe('decodeToken', () => {
    var serv
    beforeEach(() => {
      serv = new AuthApi()
    })

    it('Expect to return null if there is no token', () => {
      expect(serv.decodeToken(null)).to.equals(null)
    })

    it('Expect to return valid token', () => {
      expect(serv.decodeToken({access_token: 'mytoken'})).to.equals('mytoken')
    })
  })

  describe('encodeSignInData', () => {
    var serv
    beforeEach(() => {
      serv = new AuthApi()
    })

    it('Expect to return object with password2', () => {
      expect(serv.encodeSignInData('username', 'mail', 'password1', 'password2', 'captcharesponse').password2).to.equals('password2')
    })

    it('Expect to return object with password1', () => {
      expect(serv.encodeSignInData('username', 'mail', 'password1', 'password2', 'captcharesponse').password1).to.equals('password1')
    })

    it('Expect to return object with mail', () => {
      expect(serv.encodeSignInData('username', 'mail', 'password1', 'password2', 'captcharesponse').mail).to.equals('mail')
    })

    it('Expect to return object with username', () => {
      expect(serv.encodeSignInData('username', 'mail', 'password1', 'password2', 'captcharesponse').username).to.equals('username')
    })

    it('Expect to return object with recaptcha', () => {
      expect(serv.encodeSignInData('username', 'mail', 'password1', 'password2', 'captcharesponse').recaptcha).to.equals('captcharesponse')
    })
  })
})
