import React /*, { PropTypes }*/ from 'react'
import { connect } from 'react-redux'
import SidebarLoggedIn from './../component/sidebar-logged-in.component'
import SidebarLoggedOff from './../component/sidebar-logged-off.component'
import SidebarLogo from './../component/sidebar-logo.component'

/**
 * Sidebar container, used to define the composition of the Sidebar
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const Sidebar = (props) => {
  return (
    <div className='sidebar-container'>
      <SidebarLogo />
      SIDEBAR
      <SidebarLoggedOff />
      or
      <SidebarLoggedIn />
    </div>
  )
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {}
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
Sidebar.propTypes = {}

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
