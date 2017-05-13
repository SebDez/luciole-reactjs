import {expect} from 'chai'
import LucioleActions from './luciole-actions'
import Constants from './../../constants'

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

    it('Expect to not call restHelper manageErrors if error ALREADY_MANAGED', () => {
      let spy = chai.spy.on(serv.restHelper, 'manageErrors')
      serv.manageHttpErrors(Constants.ERRORS.ALREADY_MANAGED)
      expect(spy).not.to.have.been.called()
    })
  })

  describe('getTokenFromGetState', () => {
    var serv, getState
    beforeEach(() => {
      serv = new LucioleActions()
      getState = () => {
        return {
          application: {
            auth: {
              user: {
                token: 'my-token'
              }
            }
          }
        }
      }
    })

    it('Expect to return conf', () => {
      expect(serv.getTokenFromGetState(getState)).to.equal('my-token')
    })
  })

  describe('getDoNothingAction', () => {
    it('Expect to return DO_NOTHING as action type', () => {
      const serv = new LucioleActions()
      expect(serv.getDoNothingAction().type).to.equal('DO_NOTHING')
    })
  })
})
