import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'

/**
 * LuDropdownMenu Component
 */
class LuDropdownMenu extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div className='dropdown-menu'>
        <ul className={this.props.listClass}>
           {this.props.children}
        </ul>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuDropdownMenu.propTypes = {
  listClass: PropTypes.string
}

/**
 * Export the component
 */
export default LuDropdownMenu
