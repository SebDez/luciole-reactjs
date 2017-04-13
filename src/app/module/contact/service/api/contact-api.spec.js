import {expect} from 'chai'
import ContactApi from './contact-api'
import MockRequestHelper from './../../../../../test/mock/mock-request-helper'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('ContactApi', () => {
  describe('sendContactMessage', () => {
    var serv, rHelper, message, mockService
    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new ContactApi()
      serv.requestHelper = rHelper
      message = {
        mail: 'message.mail',
        subject: 'message.subject',
        content: 'message.content',
        captcharesponse: 'recaptchakey'
      }
      mockService = sinon.mock(serv)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
    })

    it('Expect to return a promise', () => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      expect(serv.sendContactMessage(message)).to.be.an.instanceof(Promise)
    })

    it('Expect to have call post method', (done) => {
      mockService.expects('getAppEndpoint').returns('endpoint')
      let spy = chai.spy.on(rHelper, 'post')
      let uri = 'endpoint/v1/contact'
      let body = {
        mail: 'message.mail',
        subject: 'message.subject',
        content: 'message.content',
        recaptcha: 'recaptchakey'
      }
      serv.sendContactMessage(message).then(() => {
        expect(spy).to.have.been.called.with(uri, body)
        done()
      })
    })
  })

  describe('encodeMessage', () => {
    var serv, message
    beforeEach(() => {
      serv = new ContactApi()
      message = {
        mail: 'message.mail',
        subject: 'message.subject',
        content: 'message.content',
        captcharesponse: 'recaptchakey'
      }
    })

    it('Expect to return an object with valid mail', () => {
      expect(serv.encodeMessage(message).mail).to.equals('message.mail')
    })

    it('Expect to return an object with valid subject', () => {
      expect(serv.encodeMessage(message).subject).to.equals('message.subject')
    })

    it('Expect to return an object with valid content', () => {
      expect(serv.encodeMessage(message).content).to.equals('message.content')
    })

    it('Expect to return an object with valid recaptcha', () => {
      expect(serv.encodeMessage(message).recaptcha).to.equals('recaptchakey')
    })
  })
})
