import Constants from './../../../common/constants'
import ResourceService from './../service/resource-service'
import LucioleActions from './../../../common/core/abstract/luciole-actions'

/**
 * Class for SidebarActions
 * All main sidebar and related methods
 */
export default class SidebarActions extends LucioleActions {

  /**
   * Create a new SidebarActions
   */
  /* istanbul ignore next */
  constructor () {
    super()
    /** @type {ResourceService}*/
    this.resourceService = new ResourceService()
    /** @type {Function}*/
    this.manageSidebar = this.manageSidebar.bind(this)
    /** @type {Function}*/
    this.openSidebarAction = this.openSidebarAction.bind(this)
    /** @type {Function}*/
    this.closeSidebarAction = this.closeSidebarAction.bind(this)
    /** @type {Function}*/
    this.getUserResources = this.getUserResources.bind(this)
  }

  /**
   * Open or close the sidebar
   * @type {Boolean} [isOpen] True to close the sidebar, false to open
   * @return {Object} Returns a new action that can be managed by Redux
   */
  manageSidebar (isOpen) {
    if (isOpen) return this.closeSidebarAction()
    return this.openSidebarAction()
  }

  /**
   * Create an action with the OPEN_SIDEBAR type
   * Returns a new action that can be managed by Redux
   */
  openSidebarAction () {
    return {
      type: Constants.ACTIONS.SIDEBAR.OPEN_SIDEBAR
    }
  }

  /**
  * Create an action with the CLOSE_SIDEBAR type
  * Returns a new action that can be managed by Redux
  */
  closeSidebarAction () {
    return {
      type: Constants.ACTIONS.SIDEBAR.CLOSE_SIDEBAR
    }
  }

  /**
   * Get the user resources data
   * @return {Object}  The action to dispatch with user resources
   */
  getUserResources () {
    return dispatch => {
      return this.resourceService.getUserResources().then(res => {
        dispatch(this.getUserResourceSuccessAction(res.data))
      }).catch(this.manageHttpErrors.bind(this))
    }
  }

  /**
   * Create an action with the GET_RESOURCES_SUCCESS type
   * Accepts the new token to put in Redux store
   * Returns a new action that can be managed by Redux
   * @param {Object} resources The resources to use
   */
  getUserResourceSuccessAction (resources) {
    return {
      type: Constants.ACTIONS.RESOURCE.GET_RESOURCES_SUCCESS,
      resources
    }
  }

}
