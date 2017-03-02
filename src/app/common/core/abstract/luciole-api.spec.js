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
})
