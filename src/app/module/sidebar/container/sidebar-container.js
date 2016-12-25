import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import SidebarLoggedIn from './../component/sidebar-logged-in-component'
import SidebarLoggedOff from './../component/sidebar-logged-off-component'
import SidebarLogo from './../component/sidebar-logo-component'
import AuthService from './../../../common/auth/service/auth-service'
import AuthActions from './../../../common/auth/action/auth-action'
import SidebarActions from './../action/sidebar-action'

/**
 * Sidebar container, used to define the composition of the Sidebar
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const Sidebar = (props) => {
  const content = getHomePageContentElement(props)
  return (
    <div className='sidebar-container'>
      <SidebarLogo />
      {content}
      <div className='sidebar-footer'>
        <Link to='/cgu'>CGU</Link> - <Link to='/about'>A propos</Link> - <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

/**
 * Get home page content element according to the user (logged or not)
 * @param  {Object} props The container props
 * @return {Object}       The element to render
 */
function getHomePageContentElement (props) {
  if (isUserLoggedIn(props)) {
    if (props.userResource) {
      return (
        <SidebarLoggedIn
          disconnectUser={disconnectUser.bind(null, props)}
          userResource={props.userResource}
          reloadResources={getUserResources.bind(null, props)}
        />)
    } else {
      getUserResources(props)
    }
  }
  return (<SidebarLoggedOff logUserIn={logUserIn.bind(null, props)} />)
}

/**
 * Disconnect an user
 * @param  {Object} props The container props
 */
function disconnectUser (props) {
  props.authActions.disconnectUser()
}

/**
 * Log an user in
 * @param  {Object} props The container props
 */
function logUserIn (props) {
  props.authActions.logUserIn('login', 'password')
}

/**
 * Check if the user is logged in
 * @param  {Object}  props The container props
 * @return {Boolean}       True if the user is logged in, else false
 */
function isUserLoggedIn (props) {
  return AuthService.isConnected(props)
}

function getUserResources (props) {
  props.sidebarActions.getUserResources()
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    auth: state.application.auth,
    userResource: state.application.module.sidebar.userResource
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {
    authActions: bindActionCreators(new AuthActions(), dispatch),
    sidebarActions: bindActionCreators(new SidebarActions(), dispatch)
  }
}

/**
 * The container properties' types
 * @type {Object}
 */
Sidebar.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired
}

Sidebar.mapStateToProps = mapStateToProps
Sidebar.mapDispatchToProps = mapDispatchToProps
Sidebar.__testOnly = {
  disconnectUser,
  logUserIn
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
)(Sidebar)