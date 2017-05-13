import UserService from './user-service'
import MockUserService from './../../../../test/mock/mock-user-service'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('UserService', () => {
  let service, api, spy

  beforeEach(() => {
    service = new UserService()
    api = new MockUserService()
    service.api = api
  })

  describe('getUserProfile', () => {
    it('Expect to have call api getUserProfile', (done) => {
      spy = chai.spy.on(service.api, 'getUserProfile')
      service.getUserProfile().then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })
  })
})
