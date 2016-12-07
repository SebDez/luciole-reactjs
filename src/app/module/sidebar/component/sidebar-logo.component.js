import React from 'react'
import {IndexLink} from 'react-router'
import LucioleComponent from './../../../common/core/abstract/luciole-component'

/**
 * SidebarLogo Component
 */
class SidebarLogo extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div className='sidebar-logo'>
        <IndexLink to='/'><img src='../assets/img/luciole_logo.png' alt='Logo' /></IndexLink>
      </div>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLogo.propTypes = {}

/**
 * Export the component
 */
export default SidebarLogo
