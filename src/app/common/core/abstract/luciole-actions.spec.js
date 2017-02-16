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

  describe('getEnvConfFromGetState', () => {
    var serv, getState
    beforeEach(() => {
      serv = new LucioleActions()
      getState = () => {
        return {
          application: {
            app: {
              conf: 'my-conf'
            }
          }
        }
      }
    })

    it('Expect to return conf', () => {
      expect(serv.getEnvConfFromGetState(getState)).to.equal('my-conf')
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
              token: 'my-token'
            }
          }
        }
      }
    })

    it('Expect to return conf', () => {
      expect(serv.getTokenFromGetState(getState)).to.equal('my-token')
    })
  })
})
