import {expect} from 'chai'
import UserApi from './user-api'
import MockRequestHelper from './../../../../../test/mock/mock-request-helper'
import User from './../model/user-model'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('UserApi', () => {
  describe('getUserProfile', () => {
    var serv, rHelper, mockService, mockRequestHelper

    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserApi()
      mockRequestHelper = sinon.mock(rHelper)
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockRequestHelper.verify()
      mockRequestHelper.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      expect(serv.getUserProfile('mytoken')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call get method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(rHelper, 'get')
      let uri = 'endpoint/v1/users/me?access_token=mytoken'
      serv.getUserProfile('mytoken').then(() => {
        expect(spy).to.have.been.called.with(uri)
        done()
      })
    })

    it('Expect to have call addTokenQueryParamToUri', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(serv, 'addTokenQueryParamToUri')
      serv.getUserProfile('mytoken').then(() => {
        expect(spy).to.have.been.called()
        done()
      })
    })

    it('Expect to have call decodeUser', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(serv, 'decodeUser')
      serv.getUserProfile('mytoken').then(() => {
        expect(spy).to.have.been.called.with(response.body)
        done()
      })
    })

    it('Expect to resolve an User', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {}}
      mockRequestHelper.expects('get').resolves(response)
      serv.getUserProfile('mytoken').then(res => {
        expect(res).to.be.an.instanceof(User)
        done()
      })
    })
  })

  describe('editUsername', () => {
    var serv, rHelper, mockService, token, username
    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserApi()
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
      token = 'mytoken'
      username = 'my-username'
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewUsername').returns('my-body')
      expect(serv.editUsername(token, username)).to.be.an.instanceof(Promise)
    })

    it('Expect to have call put method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewUsername').returns('my-body')
      let spy = chai.spy.on(rHelper, 'put')
      serv.editUsername(token, username).then(() => {
        expect(spy).to.have.been.called.with('my-final-endpoint', 'my-body')
        done()
      })
    })
  })

  describe('encodeNewUsername', () => {
    var serv
    beforeEach(() => {
      serv = new UserApi()
    })

    it('Expect to return an object with valid username', () => {
      expect(serv.encodeNewUsername('username').username).to.equals('username')
    })
  })

  describe('editPersonalDatas', () => {
    var serv, rHelper, mockService, token, birthDate, gender, country, region
    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserApi()
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
      token = 'mytoken'
      birthDate = 'my-username'
      gender = 'my-gender'
      country = 'my-country'
      region = 'my-region'
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodePersonalDatas').returns('my-body')
      expect(serv.editPersonalDatas(token, birthDate, gender, country, region)).to.be.an.instanceof(Promise)
    })

    it('Expect to have call put method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodePersonalDatas').returns('my-body')
      let spy = chai.spy.on(rHelper, 'put')
      serv.editPersonalDatas(token, birthDate, gender, country, region).then(() => {
        expect(spy).to.have.been.called.with('my-final-endpoint', 'my-body')
        done()
      })
    })
  })

  describe('encodePersonalDatas', () => {
    var serv
    beforeEach(() => {
      serv = new UserApi()
    })

    it('Expect to return an object with valid birthDate', () => {
      expect(serv.encodePersonalDatas('my-birthDate', 'my-gender', 'country', 'gender').birthDate).to.equals('my-birthDate')
    })

    it('Expect to return an object with valid genderCode', () => {
      expect(serv.encodePersonalDatas('my-birthDate', 'my-gender', 'country', 'gender').genderCode).to.equals('my-gender')
    })

    it('Expect to return an object with valid countryCode', () => {
      expect(serv.encodePersonalDatas('my-birthDate', 'my-gender', 'country', 'region').countryCode).to.equals('country')
    })

    it('Expect to return an object with valid regionCode', () => {
      expect(serv.encodePersonalDatas('my-birthDate', 'my-gender', 'country', 'region').regionCode).to.equals('region')
    })
  })

  describe('editAvatar', () => {
    var serv, rHelper, mockService, token, avatar
    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserApi()
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
      token = 'mytoken'
      avatar = 'my-avatar'
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewAvatar').returns('my-body')
      expect(serv.editAvatar(token, avatar)).to.be.an.instanceof(Promise)
    })

    it('Expect to have call put method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      mockService.expects('addTokenQueryParamToUri').returns('my-final-endpoint')
      mockService.expects('encodeNewAvatar').returns('my-body')
      let spy = chai.spy.on(rHelper, 'put')
      serv.editAvatar(token, avatar).then(() => {
        expect(spy).to.have.been.called.with('my-final-endpoint', 'my-body')
        done()
      })
    })
  })

  describe('encodeNewAvatar', () => {
    var serv
    beforeEach(() => {
      serv = new UserApi()
    })

    it('Expect to return an object with valid avatar', () => {
      expect(serv.encodeNewAvatar('avatar').avatar).to.equals('avatar')
    })
  })

  describe('decodeUser', () => {
    var serv, user
    beforeEach(() => {
      serv = new UserApi()
      user = {
        mail: 'mail',
        _id: '_id',
        username: 'username',
        role: 'role',
        userTag: 'userTag',
        signUpDate: 'signUpDate',
        birthDate: 'birthDate',
        gender: 'gender',
        country: 'country',
        region: 'region',
        avatar: {
          selected: 'selected',
          availableList: 'availableList'
        }
      }
    })

    it('Expect to return an User', () => {
      expect(serv.decodeUser(user)).to.be.an.instanceof(User)
    })

    it('Expect to return an object with valid _id', () => {
      expect(serv.decodeUser(user)._id).to.equals('_id')
    })

    it('Expect to return an object with valid mail', () => {
      expect(serv.decodeUser(user).mail).to.equals('mail')
    })

    it('Expect to return an object with valid username', () => {
      expect(serv.decodeUser(user).username).to.equals('username')
    })

    it('Expect to return an object with valid role', () => {
      expect(serv.decodeUser(user).role).to.equals('role')
    })

    it('Expect to return an object with valid userTag', () => {
      expect(serv.decodeUser(user).userTag).to.equals('userTag')
    })

    it('Expect to return an object with valid signUpDate', () => {
      expect(serv.decodeUser(user).signUpDate).to.equals('signUpDate')
    })

    it('Expect to return an object with valid birthDate', () => {
      expect(serv.decodeUser(user).birthDate).to.equals('birthDate')
    })

    it('Expect to return an object with valid gender', () => {
      expect(serv.decodeUser(user).gender).to.equals('gender')
    })

    it('Expect to return an object with valid country', () => {
      expect(serv.decodeUser(user).country).to.equals('country')
    })

    it('Expect to return an object with valid region', () => {
      expect(serv.decodeUser(user).region).to.equals('region')
    })

    it('Expect to return an object with valid selected', () => {
      expect(serv.decodeUser(user).avatar.selected).to.equals('selected')
    })

    it('Expect to return an object with valid availableList', () => {
      expect(serv.decodeUser(user).avatar.availableList).to.equals('availableList')
    })

    it('Expect to return an object with default selected is not given', () => {
      user.avatar.selected = null
      expect(serv.decodeUser(user).avatar.selected).to.equals('default')
    })

    it('Expect to return an object with default availableList if availableList is not given', () => {
      user.avatar.availableList = null
      expect(serv.decodeUser(user).avatar.availableList[0]).to.equals('tumblr_mdj13ty0p91r4nmedo1_1280.jpg')
    })

    it('Expect to return an object with default availableList if avatar is not given', () => {
      user.avatar = null
      expect(serv.decodeUser(user).avatar.availableList[0]).to.equals('tumblr_mdj13ty0p91r4nmedo1_1280.jpg')
    })

    it('Expect to return an object with default availableList if availableList is empty is not given', () => {
      user.avatar.availableList = []
      expect(serv.decodeUser(user).avatar.availableList[0]).to.equals('tumblr_mdj13ty0p91r4nmedo1_1280.jpg')
    })
  })

  describe('getAvatarList', () => {
    var serv, rHelper, mockService, mockRequestHelper

    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new UserApi()
      mockRequestHelper = sinon.mock(rHelper)
      serv.requestHelper = rHelper
      mockService = sinon.mock(serv)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockRequestHelper.verify()
      mockRequestHelper.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {list: []}}
      mockRequestHelper.expects('get').resolves(response)
      expect(serv.getAvatarList('mytoken')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call get method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {list: []}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(rHelper, 'get')
      let uri = 'endpoint/v1/avatars?access_token=mytoken'
      serv.getAvatarList('mytoken').then(() => {
        expect(spy).to.have.been.called.with(uri)
        done()
      })
    })

    it('Expect to have call addTokenQueryParamToUri', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {list: []}}
      mockRequestHelper.expects('get').resolves(response)
      let spy = chai.spy.on(serv, 'addTokenQueryParamToUri')
      serv.getAvatarList('mytoken').then(() => {
        expect(spy).to.have.been.called()
        done()
      })
    })

    it('Expect to resolve a list', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let response = {body: {list: []}}
      mockRequestHelper.expects('get').resolves(response)
      serv.getAvatarList('mytoken').then(res => {
        expect(res).to.be.an.instanceof(Array)
        done()
      })
    })
  })
})
