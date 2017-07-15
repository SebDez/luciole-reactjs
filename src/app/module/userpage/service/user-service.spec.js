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

  describe('editUsername', () => {
    it('Expect to have call api editUsername', (done) => {
      spy = chai.spy.on(service.api, 'editUsername')
      service.editUsername('token', 'username').then(() => {
        expect(spy).to.have.been.called.with('token', 'username')
        done()
      })
    })
  })

  describe('editPersonalDatas', () => {
    it('Expect to have call api editPersonalDatas', (done) => {
      spy = chai.spy.on(service.api, 'editPersonalDatas')
      service.editPersonalDatas('token', 'birthDate', 'gender', 'country', 'region').then(() => {
        expect(spy).to.have.been.called.with('token', 'birthDate', 'gender', 'country', 'region')
        done()
      })
    })
  })

  describe('editAvatar', () => {
    it('Expect to have call api editAvatar', (done) => {
      spy = chai.spy.on(service.api, 'editAvatar')
      service.editAvatar('token', 'avatar').then(() => {
        expect(spy).to.have.been.called.with('token', 'avatar')
        done()
      })
    })
  })

  describe('getAvatarList', () => {
    it('Expect to have call api getAvatarList', (done) => {
      spy = chai.spy.on(service.api, 'getAvatarList')
      service.getAvatarList().then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })
  })
})
