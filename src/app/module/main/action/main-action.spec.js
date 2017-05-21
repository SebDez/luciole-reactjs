import MainActions from './main-action'
import UserLangService from './../../../module/main/service/userlang-service'
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
    let userLangService
    let mocki18nActions, mockuserLangServ, mockActions
    beforeEach(() => {
      mocki18nActions = sinon.mock(actions.i18nActions)
      userLangService = new UserLangService()
      mockuserLangServ = sinon.mock(userLangService)
      actions.userLangService = userLangService
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mocki18nActions.verify()
      mocki18nActions.restore()
      mockuserLangServ.verify()
      mockuserLangServ.restore()
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to return setLocale value', () => {
      mockActions.expects('getTokenFromGetState').returns(null)
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      expect(actions.changeLanguage('1')(TestHelper.dispatch, TestHelper.getState)).to.equal(0)
    })

    it('Expect to have call setLocale if there is no token', () => {
      mockActions.expects('getTokenFromGetState').returns(null)
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      const spy = chai.spy.on(actions.i18nActions, 'setLocale')
      actions.changeLanguage('1')(TestHelper.dispatch, TestHelper.getState)
      expect(spy).to.have.been.called.with('fr')
    })

    it('Expect to NOT have call userLangService.changeUserLang if there is no token', () => {
      mockActions.expects('getTokenFromGetState').returns(null)
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      const spy = chai.spy.on(actions.userLangService, 'changeUserLang')
      actions.changeLanguage('1')(TestHelper.dispatch, TestHelper.getState)
      expect(spy).not.to.have.been.called
    })

    it('Expect to have call dispatch with good params if there is no token', () => {
      mockActions.expects('getTokenFromGetState').returns(null)
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      const spy = chai.spy.on(TestHelper, 'dispatch')
      actions.changeLanguage('1')(TestHelper.dispatch, TestHelper.getState)
      expect(spy).to.have.been.called.with('setLocale-result')
    })

    it('Expect to have call userLangService.changeUserLang if there is a token', (done) => {
      mockActions.expects('getTokenFromGetState').returns('mytoken')
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      mockuserLangServ.expects('changeUserLang').resolves('changeUserLang-result')
      const spy = chai.spy.on(actions.userLangService, 'changeUserLang')
      actions.changeLanguage('1')(TestHelper.dispatch, TestHelper.getState).then(() => {
        expect(spy).to.have.been.called.with('mytoken', 'fr')
        done()
      })
    })

    it('Expect to have call dispatch with good params if there is a token', (done) => {
      mockActions.expects('getTokenFromGetState').returns('mytoken')
      mocki18nActions.expects('setLocale').returns('setLocale-result')
      mockuserLangServ.expects('changeUserLang').resolves('changeUserLang-result')
      const spy = chai.spy.on(TestHelper, 'dispatch')
      actions.changeLanguage('1')(TestHelper.dispatch, TestHelper.getState).then(() => {
        expect(spy).to.have.been.called.with('setLocale-result')
        done()
      })
    })
  })
})
