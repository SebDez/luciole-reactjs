import {expect} from 'chai'
import AuthApi from './auth-api'
import MockRequestHelper from './../../../../../test/mock/mock-request-helper'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('AuthApi', () => {
  describe('logUserIn', () => {
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
      expect(serv.logUserIn('login', 'password')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call post method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('encodeLogData').returns('encodedLogData')
      let spy = chai.spy.on(rHelper, 'post')
      let uri = 'endpoint/oauth2/token/owner'
      let body = 'encodedLogData'
      serv.logUserIn('login', 'password').then(() => {
        expect(spy).to.have.been.called.with(uri, body)
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
      expect(serv.disconnectUser()).to.be.an.instanceof(Promise)
    })

    it('Expect to have call post method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let spy = chai.spy.on(rHelper, 'post')
      let uri = 'endpoint/v1/logout'
      serv.disconnectUser().then(() => {
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
})
