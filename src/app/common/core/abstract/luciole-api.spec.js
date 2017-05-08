import {expect} from 'chai'
import LucioleApi from './luciole-api'
import RequestHelper from './../../helper/request-helper'

describe('LucioleActions', () => {
  describe('manageHttpErrors', () => {
    var serv
    beforeEach(() => {
      serv = new LucioleApi()
    })

    it('Expect to have requestHelper defined', () => {
      expect(serv.requestHelper).to.be.an.instanceof(RequestHelper)
    })
  })

  describe('getAppEndpoint', () => {
    var serv
    beforeEach(() => {
      serv = new LucioleApi()
      serv.appConf = {
        api: {
          url: 'my-url',
          port: 42
        }
      }
    })

    it('Expect to return the endpoint', () => {
      expect(serv.getAppEndpoint()).to.equals('my-url:42')
    })
  })

  describe('addTokenQueryParamToUri', () => {
    var serv
    beforeEach(() => {
      serv = new LucioleApi()
    })

    it('Expect to return the endpoint', () => {
      expect(serv.addTokenQueryParamToUri('my-uri', 'my-token')).to.equals('my-uri?access_token=my-token')
    })
  })
})
