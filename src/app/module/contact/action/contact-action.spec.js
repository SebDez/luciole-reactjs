import ContactActions from './contact-action'
import ContactService from './../service/contact-service'
import MockI18n from './../../../../test/mock/mock-i18n'
import TestHelper from './../../../../test/mock/test-helper'

require('sinon-as-promised')
let chai = require('chai')
let sinon = require('sinon')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('ContactActions', () => {
  let actions, contactService, i18n, mockContactService, spy

  beforeEach(() => {
    contactService = new ContactService()
    i18n = new MockI18n()
    actions = new ContactActions()
    mockContactService = sinon.mock(contactService)
    actions.contactService = contactService
    actions.i18n = i18n
    actions.toastrHelper = {
      showMessage: () => 0
    }
    actions.getEndpointFromGetState = () => 'endpoint'
    actions.getDoNothingAction = () => 'DoNothingAction'
    actions.manageHttpErrors = () => 0
  })

  afterEach(() => {
    mockContactService.verify()
    mockContactService.restore()
  })

  describe('sendContactMessage', () => {
    /**
     * call manageHttpErrors (err)
     */

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockContactService.expects('sendContactMessage').returns(Promise.resolve())
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.sendContactMessage('message')(TestHelper.dispatch, 'getState').then(() => {
        expect(spy).to.have.been.called.with('DoNothingAction')
        done()
      })
    })

    it('Expect to have call getDoNothingAction with good params in case of success', (done) => {
      mockContactService.expects('sendContactMessage').returns(Promise.resolve())
      spy = chai.spy.on(actions, 'getDoNothingAction')
      actions.sendContactMessage('message')(TestHelper.dispatch, 'getState').then(() => {
        expect(spy).to.have.been.called.with()
        done()
      })
    })

    it('Expect to have call sendContactMessage with good params', (done) => {
      mockContactService.expects('sendContactMessage').returns(Promise.resolve())
      spy = chai.spy.on(contactService, 'sendContactMessage')
      actions.sendContactMessage('message')(TestHelper.dispatch, 'getState').then(() => {
        expect(spy).to.have.been.called.with('endpoint', 'message')
        done()
      })
    })

    it('Expect to have call showMessage with good params in case of success', (done) => {
      mockContactService.expects('sendContactMessage').returns(Promise.resolve())
      spy = chai.spy.on(actions.toastrHelper, 'showMessage')
      actions.sendContactMessage('message')(TestHelper.dispatch, 'getState').then(() => {
        expect(spy).to.have.been.called.with('success', 'application.contact.toast_success_title', 'application.contact.toast_success_text')
        done()
      })
    })

    it('Expect to have call manageHttpErrors with good params in case of failure', (done) => {
      mockContactService.expects('sendContactMessage').returns(Promise.reject('err'))
      spy = chai.spy.on(actions, 'manageHttpErrors')
      actions.sendContactMessage('message')(TestHelper.dispatch, 'getState').then(() => {
        expect(spy).to.have.been.called.with('err')
        done()
      })
    })
  })
})
