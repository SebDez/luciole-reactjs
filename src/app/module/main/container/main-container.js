import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import SidebarActions from './../../sidebar/action/sidebar-action'
import MainPageSidebarBurger from './../component/main-sidebar-burger-component'
import MainPageUserCard from './../component/main-user-card-component'
import AuthService from './../../../common/auth/service/auth-service'
import MainActions from './../action/main-action'

/**
 * Main container, used to define the composition of the Main screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const Main = (props) => {
  const sidebarBurger = getSidebarBurgerElement(props)
  return (
    <div className='main-container'>
      {sidebarBurger}
      {props.children}
    </div>
  )
}

/**
 * Get sidebarburger element if the user is logged in
 * @param  {Object} props The container props
 * @return {Object}       The element to render
 */
function getSidebarBurgerElement (props) {
  if (isUserLoggedIn(props)) {
    if (props.user) {
      return (
        <div>
          <MainPageSidebarBurger onClick={handleBurgerClick.bind(null, props)} />
          <MainPageUserCard user={props.user} />
        </div>
      )
    } else {
      getUserInformations(props)
    }
  }
  return null
}

function getUserInformations (props) {
  props.mainActions.getUserInformations()
}

/**
 * Handle the burger click to open/close sidebar
 * @param  {Object} props The container props
 */
function handleBurgerClick (props) {
  props.sidebarActions.manageSidebar(props.sidebar.open)
}

/**
* Check if the user is logged in
* @param  {Object}  props The container props
* @return {Boolean}       True if the user is logged in, else false
*/
function isUserLoggedIn (props) {
  return AuthService.isConnected(props)
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    auth: state.application.auth,
    sidebar: state.application.module.sidebar,
    user: state.application.module.main.user
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {
    sidebarActions: bindActionCreators(new SidebarActions(), dispatch),
    mainActions: bindActionCreators(new MainActions(), dispatch)
  }
}

/**
 * The container properties' types
 * @type {Object}
 */
Main.propTypes = {
  auth: PropTypes.object.isRequired,
  sidebar: PropTypes.object.isRequired,
  sidebarActions: PropTypes.object.isRequired,
  mainActions: PropTypes.object.isRequired
}

Main.mapStateToProps = mapStateToProps
Main.mapDispatchToProps = mapDispatchToProps
Main.__testOnly = {
  getSidebarBurgerElement,
  handleBurgerClick
}

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
