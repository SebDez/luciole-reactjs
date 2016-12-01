import Constants from './../../../common/constants'

/**
 * Class for SidebarActions
 */
export default class SidebarActions {

  /**
   * Create a new SidebarActions
   */
  constructor () {
    /** @type {Function}*/
    this.manageSidebar = this.manageSidebar.bind(this)
    /** @type {Function}*/
    this.openSidebarAction = this.openSidebarAction.bind(this)
    /** @type {Function}*/
    this.closeSidebarAction = this.closeSidebarAction.bind(this)
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
}
