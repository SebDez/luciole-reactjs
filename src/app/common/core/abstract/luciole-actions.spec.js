import {expect} from 'chai'
import LucioleActions from './luciole-actions'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('LucioleActions', () => {
  describe('manageHttpErrors', () => {
    var serv
    beforeEach(() => {
      const restHelper = {
        manageErrors: () => 0
      }
      serv = new LucioleActions()
      serv.restHelper = restHelper
    })

    it('Expect to call restHelper manageErrors', () => {
      let spy = chai.spy.on(serv.restHelper, 'manageErrors')
      serv.manageHttpErrors('error')
      expect(spy).to.have.been.called.with('error')
    })
  })
})
