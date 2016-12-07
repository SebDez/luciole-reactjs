import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'

/**
 * SidebarLoggedOff Component
 */
export class SidebarLoggedOff extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <div className='sidebar-content off'>
          <div className='sidebar-button' onClick={this.props.logUserIn}>Jouer</div>
        </div>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedOff.propTypes = {
  logUserIn: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default SidebarLoggedOff
