import {expect} from 'chai'
import UserApi from './user-api'
import MockRequestHelper from './../../../../../test/mock/mock-request-helper'
import User from './../model/user-model'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('UserApi', () => {
  describe('getUserProfile', () => {
    var serv, rHelper, mockService, mockRequestHelper

    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserApi()
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
      mockRequestHelper.expects('get').resolves(response)
      expect(serv.getUserProfile('mytoken')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call get method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(rHelper, 'get')
      let uri = 'endpoint/v1/users/me?access_token=mytoken'
      serv.getUserProfile('mytoken').then(() => {
        expect(spy).to.have.been.called.with(uri)
        done()
      })
    })

    it('Expect to have call addTokenQueryParamToUri', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(serv, 'addTokenQueryParamToUri')
      serv.getUserProfile('mytoken').then(() => {
        expect(spy).to.have.been.called()
        done()
      })
    })

    it('Expect to have call decodeUser', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(serv, 'decodeUser')
      serv.getUserProfile('mytoken').then(() => {
        expect(spy).to.have.been.called.with(response.body)
        done()
      })
    })

    it('Expect to resolve an User', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      serv.getUserProfile('mytoken').then(res => {
        expect(res).to.be.an.instanceof(User)
        done()
      })
    })
  })

  describe('editUsername', () => {
    var serv, rHelper, mockService, token, username
    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserApi()
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
      token = 'mytoken'
      username = 'my-username'
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewUsername').returns('my-body')
      expect(serv.editUsername(token, username)).to.be.an.instanceof(Promise)
    })

    it('Expect to have call put method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewUsername').returns('my-body')
      let spy = chai.spy.on(rHelper, 'put')
      serv.editUsername(token, username).then(() => {
        expect(spy).to.have.been.called.with('my-final-endpoint', 'my-body')
        done()
      })
    })
  })

  describe('encodeNewUsername', () => {
    var serv
    beforeEach(() => {
      serv = new UserApi()
    })

    it('Expect to return an object with valid username', () => {
      expect(serv.encodeNewUsername('username').username).to.equals('username')
    })
  })
})
