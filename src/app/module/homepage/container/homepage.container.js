import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import SidebarActions from './../../sidebar/action/sidebar.action'
import HomePageLoggedIn from './../component/homepage-logged-in.component'
import HomePageLoggedOff from './../component/homepage-logged-off.component'
import HomePageSidebarBurger from './../component/homepage-sidebar-burger.component'
import AuthService from './../../../common/auth/service/auth.service'

/**
 * HomePage container, used to define the composition of the HomePage screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const HomePage = (props) => {
  const content = isUserLoggedIn(props) ? (<HomePageLoggedIn />) : (<HomePageLoggedOff />)
  return (
    <div>
      <HomePageSidebarBurger onClick={handleBurgerClick.bind(null, props)} />
      HOMEPAGE
      {content}
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

function handleBurgerClick (props) {
  props.sidebarActions.manageSidebar(props.sidebar.open)
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    auth: state.application.auth,
    sidebar: state.application.module.sidebar
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {
    sidebarActions: bindActionCreators(new SidebarActions(), dispatch)
  }
}

/**
 * The container properties' types
 * @type {Object}
 */
HomePage.propTypes = {
  auth: PropTypes.object.isRequired,
  sidebar: PropTypes.object.isRequired,
  sidebarActions: PropTypes.object.isRequired
}

HomePage.mapStateToProps = mapStateToProps
HomePage.mapDispatchToProps = mapDispatchToProps

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
