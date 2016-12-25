import Constants from './../../../common/constants'
import UserResource from './../service/user-service'

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

}
