import Constants from './../../../common/constants'
import UserResource from './../service/user-service'
import { setLocale } from 'react-redux-i18n'

/**
 * Class for MainActions
 * All main actions and related methods
 */
export default class MainActions {

  /**
   * Create a new MainActions
   */
  constructor () {
    /** @type {UserResource}*/
    this.userService = new UserResource()
    /** @type {Function}*/
    this.getUserInformations = this.getUserInformations.bind(this)
    /** @type {Function}*/
    this.changeLanguage = this.changeLanguage.bind(this)
    /** @type {Function}*/
    this.manageLangToggle = this.manageLangToggle.bind(this)
    /** @type {Object}*/
    this.i18nActions = {setLocale}
  }

  /**
   * Get the user informations and dispatch action
   * @return {Object}  The action to dispatch
   */
  getUserInformations () {
    return dispatch => {
      return this.userService.getUserInformations().then(res => {
        dispatch(this.getUserInformationsSuccessAction(res.data))
      })
    }
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
    return this.i18nActions.setLocale(codeLanguage)
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
