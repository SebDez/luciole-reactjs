import {expect} from 'chai'
import UserLangApi from './userlang-api'
import MockRequestHelper from './../../../../../test/mock/mock-request-helper'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('UserLangApi', () => {
  describe('changeUserLang', () => {
    var serv, rHelper, mockService, token, lang
    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserLangApi()
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
      token = 'mytoken'
      lang = 'mylang'
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewUserLang').returns('my-body')
      expect(serv.changeUserLang(token, lang)).to.be.an.instanceof(Promise)
    })

    it('Expect to have call put method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewUserLang').returns('my-body')
      let spy = chai.spy.on(rHelper, 'put')
      serv.changeUserLang(token, lang).then(() => {
        expect(spy).to.have.been.called.with('my-final-endpoint', 'my-body')
        done()
      })
    })
  })

  describe('encodeNewUserLang', () => {
    var serv
    beforeEach(() => {
      serv = new UserLangApi()
    })

    it('Expect to return an object with valid lang', () => {
      expect(serv.encodeNewUserLang('fr').lang).to.equals('fr')
    })
  })
})
