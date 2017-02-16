import {expect} from 'chai'
import LucioleApiService from './luciole-api-service'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('LucioleApiService', () => {
  describe('getFullEndPoint', () => {
    var serv, endpoint, conf
    beforeEach(() => {
      serv = new LucioleApiService()
      conf = {
        api: {
          url: 'http://my-api'
        }
      }
      endpoint = '/my-endpoint-1'
    })

    it('Expect to return full endpoint', () => {
      expect(serv.getFullEndPoint(conf, endpoint)).to.equal('http://my-api/my-endpoint-1')
    })
  })
  describe('getFullEndPointWithToken', () => {
    var serv, endpoint, conf, token
    beforeEach(() => {
      serv = new LucioleApiService()
      conf = {
        api: {
          url: 'http://my-api'
        }
      }
      endpoint = '/my-endpoint-1'
      token = 'mytoken'
    })

    it('Expect to return full endpoint with token', () => {
      expect(serv.getFullEndPointWithToken(conf, endpoint, token)).to.equal('http://my-api/my-endpoint-1?token=mytoken')
    })

    it('Expect to have call getFullEndPoint with good params', () => {
      let spy = chai.spy.on(serv, 'getFullEndPoint')
      serv.getFullEndPointWithToken(conf, endpoint, token)
      expect(spy).to.have.been.called.with(conf, endpoint)
    })
  })
})
