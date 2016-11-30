import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SidebarLoggedIn from './../component/sidebar-logged-in.component'
import SidebarLoggedOff from './../component/sidebar-logged-off.component'
import SidebarLogo from './../component/sidebar-logo.component'
import AuthService from './../../../common/auth/service/auth.service'
import {Link} from 'react-router'

/**
 * Sidebar container, used to define the composition of the Sidebar
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const Sidebar = (props) => {
  const content = isUserLoggedIn(props) ? (<SidebarLoggedIn />) : (<SidebarLoggedOff />)
  return (
    <div className='sidebar-container'>
      <SidebarLogo />
      <div className='sidebar-content'>
        {content}
      </div>
      <div className='sidebar-footer'>
        <Link to='/cgu'>CGU</Link> - <Link to='/about'>A propos</Link> - <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
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
    auth: state.application.auth
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {}
}

/**
 * The container properties' types
 * @type {Object}
 */
Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
}

Sidebar.mapStateToProps = mapStateToProps
Sidebar.mapDispatchToProps = mapDispatchToProps

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
