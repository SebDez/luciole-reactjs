import {expect} from 'chai'
import LucioleActions from './luciole-actions'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

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

  describe('getEndpointFromGetState', () => {
    var serv, mock, conf
    beforeEach(() => {
      serv = new LucioleActions()
      mock = sinon.mock(serv)
      conf = {
        default: {
          api: {
            url: 'url',
            port: 'port'
          }
        }
      }
    })

    afterEach(() => {
      mock.verify()
      mock.restore()
    })

    it('Expect to return endpoint', () => {
      mock.expects('getEnvConfFromGetState').returns(conf)
      expect(serv.getEndpointFromGetState('getState')).to.equal('url:port')
    })

    it('Expect to return endpoint', () => {
      mock.expects('getEnvConfFromGetState').returns(conf)
      let spy = chai.spy.on(serv, 'getEnvConfFromGetState')
      serv.getEndpointFromGetState('getState')
      expect(spy).to.have.been.called.with('getState')
    })
  })

  describe('getDoNothingAction', () => {
    it('Expect to return DO_NOTHING as action type', () => {
      const serv = new LucioleActions()
      expect(serv.getDoNothingAction().type).to.equal('DO_NOTHING')
    })
  })
})
