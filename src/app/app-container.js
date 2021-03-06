import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import ReactSidebar from 'react-sidebar'
import Sidebar from './module/sidebar/container/sidebar-container'

/**
 * App container, used to define the whole app
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const App = (props) => {
  const styles = {
    sidebar: {
      width: '260px',
      boxShadow: '-1px 2px 5px 5px rgba(0,0,0, 0.3)'
    }
  }
  const sidebarContent = <Sidebar />
  const sidebarProps = {
    sidebar: sidebarContent,
    open: props.sidebar.open,
    docked: props.sidebar.open,
    shadow: false,
    styles
  }
  return (
    <div className='app-container'>
      <ReactSidebar {...sidebarProps}>
          {props.children}
      </ReactSidebar>
    </div>)
}

/**
 * The container properties' types
 * @type {Object}
 */
App.propTypes = {
  sidebar: PropTypes.object.isRequired
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    sidebar: state.application.module.sidebar
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

App.mapStateToProps = mapStateToProps
App.mapDispatchToProps = mapDispatchToProps

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
