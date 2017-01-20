import MainActions from './main-action'
import UserService from './../service/user-service'
import TestHelper from './../../../../test/mock/test-helper'

require('sinon-as-promised')
let chai = require('chai')
let sinon = require('sinon')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('MainActions', () => {
  let actions

  beforeEach(() => {
    actions = new MainActions()
  })

  describe('openLanguageCardAction', () => {
    it('Expect to return OPEN_LANGUAGE_CARD as action type', () => {
      expect(actions.openLanguageCardAction().type).to.equal('OPEN_LANGUAGE_CARD')
    })
  })

  describe('closeLanguageCardAction', () => {
    it('Expect to return CLOSE_LANGUAGE_CARD as action type', () => {
      expect(actions.closeLanguageCardAction().type).to.equal('CLOSE_LANGUAGE_CARD')
    })
  })

  describe('getUserInformationsSuccessAction', () => {
    it('Expect to return GET_USER_INFORMATIONS as action type', () => {
      expect(actions.getUserInformationsSuccessAction('my-token').type).to.equal('GET_USER_INFORMATIONS')
    })
    it('Expect to return the given user as action param', () => {
      expect(actions.getUserInformationsSuccessAction('my-user').user).to.equal('my-user')
    })
  })

  describe('getUserInformations', () => {
    let mockService, mockActions, service, spy
    const data = {
      data: 'my-user'
    }

    beforeEach(() => {
      service = new UserService()
      mockService = sinon.mock(service)
      actions.userService = service
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to return a function', () => {
      expect(typeof (actions.getUserInformations())).to.equal('function')
    })

    it('Expect to have call getUserInformations with good params', (done) => {
      mockService.expects('getUserInformations').resolves(data)
      mockActions.expects('getUserInformationsSuccessAction').returns('getUserInformationsSuccessAction-result')
      spy = chai.spy.on(actions, 'getUserInformations')
      actions.getUserInformations()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockService.expects('getUserInformations').resolves(data)
      mockActions.expects('getUserInformationsSuccessAction').returns('getUserInformationsSuccessAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.getUserInformations()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('getUserInformationsSuccessAction-result')
        done()
      })
    })

    it('Expect to have call getUserInformationsSuccessAction with good params in case of success', (done) => {
      mockService.expects('getUserInformations').resolves(data)
      mockActions.expects('getUserInformationsSuccessAction').returns('getUserInformationsSuccessAction-result')
      spy = chai.spy.on(actions, 'getUserInformationsSuccessAction')
      actions.getUserInformations('my-login', 'my-password')(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('my-user')
        done()
      })
    })
  })

  describe('manageLangToggle', () => {
    let mockActions
    beforeEach(() => {
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to return closeLanguageCardAction if lang isopen', () => {
      mockActions.expects('closeLanguageCardAction').returns('closeLanguageCardActionRes')
      expect(actions.manageLangToggle(true)).to.equal('closeLanguageCardActionRes')
    })

    it('Expect to return openLanguageCardAction if lang isopen', () => {
      mockActions.expects('openLanguageCardAction').returns('openLanguageCardActionRes')
      expect(actions.manageLangToggle(false)).to.equal('openLanguageCardActionRes')
    })
  })

  describe('changeLanguage', () => {
    let mocki18nActions
    beforeEach(() => {
      mocki18nActions = sinon.mock(actions.i18nActions)
    })

    afterEach(() => {
      mocki18nActions.verify()
      mocki18nActions.restore()
    })

    it('Expect to return setLocale value', () => {
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      expect(actions.changeLanguage('1')).to.equal('setLocale-result')
    })

    it('Expect to have call setLocale', () => {
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      let spy = chai.spy.on(actions.i18nActions, 'setLocale')
      actions.changeLanguage('1')
      expect(spy).to.have.been.called.with('fr')
    })
  })
})
