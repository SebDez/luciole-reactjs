import {expect} from 'chai'
import ContactService from './contact-service'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('ContactService', () => {
  describe('sendContactMessage', () => {
    var serv, api
    beforeEach(() => {
      api = {
        sendContactMessage: () => Promise.resolve()
      }
      serv = new ContactService()
      serv.api = api
    })

    it('Expect to return a promise', () => {
      expect(serv.sendContactMessage('message')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call sendContactMessage method', (done) => {
      let spy = chai.spy.on(api, 'sendContactMessage')
      serv.sendContactMessage('message').then(() => {
        expect(spy).to.have.been.called.with('message')
        done()
      })
    })
  })
})
