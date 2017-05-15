import AuthService from './auth-service'
import MockAuthService from './../../../../test/mock/mock-auth-service'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('AuthService', () => {
  let service, api, spy

  beforeEach(() => {
    service = new AuthService()
    api = new MockAuthService()
    service.api = api
  })

  describe('logUserIn', () => {
    it('Expect to have call api logUserIn', (done) => {
      spy = chai.spy.on(service.api, 'logUserIn')
      service.logUserIn('login', 'password').then(() => {
        expect(spy).to.have.been.called.with('login', 'password')
        done()
      })
    })
  })

  describe('signUserIn', () => {
    it('Expect to have call api signUserIn', (done) => {
      spy = chai.spy.on(service.api, 'signUserIn')
      service.signUserIn('username', 'mail', 'password1', 'password2', 'captcharesponse').then(() => {
        expect(spy).to.have.been.called.with('username', 'mail', 'password1', 'password2', 'captcharesponse')
        done()
      })
    })
  })

  describe('disconnectUser', () => {
    it('Expect to have call api disconnectUser', (done) => {
      spy = chai.spy.on(service.api, 'disconnectUser')
      service.disconnectUser('mytoken').then(() => {
        expect(spy).to.have.been.called.with('mytoken')
        done()
      })
    })
  })

  describe('isConnected', () => {
    let state
    it('Expect to return true if user is connected', () => {
      state = {
        auth: {
          user: {
            token: 'mytoken'
          }
        }
      }
      expect(AuthService.isConnected(state)).to.equal(true)
    })
    it('Expect to return false if user has no token', () => {
      state = {
        auth: {
          user: {
            token: null
          }
        }
      }
      expect(AuthService.isConnected(state)).to.equal(false)
    })
    it('Expect to return false if user has no user param', () => {
      state = {
        auth: {
          user: null
        }
      }
      expect(AuthService.isConnected(state)).to.equal(false)
    })
    it('Expect to return false if user has no auth param', () => {
      state = {
        auth: null
      }
      expect(AuthService.isConnected(state)).to.equal(false)
    })
  })
})
