import {expect} from 'chai'
import ContactApi from './contact-api'
import MockRequestHelper from './../../../../../test/mock/mock-request-helper'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('ContactApi', () => {
  describe('sendContactMessage', () => {
    var serv, rHelper, message
    beforeEach(() => {
      rHelper = new MockRequestHelper()
      serv = new ContactApi()
      serv.requestHelper = rHelper
      message = {
        mail: 'message.mail',
        subject: 'message.subject',
        content: 'message.content'
      }
    })

    it('Expect to return a promise', () => {
      expect(serv.sendContactMessage('endpoint', message)).to.be.an.instanceof(Promise)
    })

    it('Expect to have call post method', (done) => {
      let spy = chai.spy.on(rHelper, 'post')
      let uri = 'endpoint/v1/contact'
      let body = message
      serv.sendContactMessage('endpoint', message).then(() => {
        expect(spy).to.have.been.called.with(uri, body)
        done()
      })
    })
  })
})
