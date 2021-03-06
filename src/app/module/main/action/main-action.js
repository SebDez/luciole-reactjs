import Constants from './../../../common/constants'
import { setLocale } from 'react-redux-i18n'
import LucioleActions from './../../../common/core/abstract/luciole-actions'
import UserLangService from './../../../module/main/service/userlang-service'

/**
 * Class for MainActions
 * All main actions and related methods
 */
export default class MainActions extends LucioleActions {

  /**
   * Create a new MainActions
   */
  /* istanbul ignore next */
  constructor () {
    super()
    /** @type {UserLangService}*/
    this.userLangService = new UserLangService()
    /** @type {Function}*/
    this.changeLanguage = this.changeLanguage.bind(this)
    /** @type {Function}*/
    this.manageLangToggle = this.manageLangToggle.bind(this)
    /** @type {Object}*/
    this.i18nActions = {setLocale}
  }

/**
 * Change app language
 * @type {string} languageCode The choosen language's code
 * @return {Object}  The action to dispatch
 */
  changeLanguage (languageCode) {
    const codeLanguage = Constants.LANGUAGE.filter(lang => {
      return lang.key === languageCode
    })[0].label
    return (dispatch, getState) => {
      const token = this.getTokenFromGetState(getState)
      // If user not logged in
      if (!token) {
        return dispatch(this.i18nActions.setLocale(codeLanguage))
      } else {
        return this.userLangService.changeUserLang(token, codeLanguage).then(() => {
          dispatch(this.i18nActions.setLocale(codeLanguage))
        }, this.manageHttpErrors.bind(this))
      }
    }
  }

  /**
   * Open or close the language card
   * @type {Boolean} [isOpen] True to close the language card, false to open
   * @return {Object} Returns a new action that can be managed by Redux
   */
  manageLangToggle (isOpen) {
    if (isOpen) return this.closeLanguageCardAction()
    return this.openLanguageCardAction()
  }

  /**
   * Create an action with the GET_USER_INFORMATIONS type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   */
  getUserInformationsSuccessAction (user) {
    return {
      type: Constants.ACTIONS.USER.GET_USER_INFORMATIONS,
      user
    }
  }

  /**
   * Create an action with the OPEN_LANGUAGE_CARD type
   * Returns a new action that can be managed by Redux
   */
  openLanguageCardAction () {
    return {
      type: Constants.ACTIONS.MAIN.OPEN_LANGUAGE_CARD
    }
  }

  /**
  * Create an action with the CLOSE_LANGUAGE_CARD type
  * Returns a new action that can be managed by Redux
  */
  closeLanguageCardAction () {
    return {
      type: Constants.ACTIONS.MAIN.CLOSE_LANGUAGE_CARD
    }
  }

}
