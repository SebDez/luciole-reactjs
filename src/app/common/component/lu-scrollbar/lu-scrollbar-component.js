import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'
import ReactScrollbar from 'react-scrollbar-js'

/**
 * LucioleScrollbar Component
 * A component used to add scrollbar to components
 */
class LucioleScrollbar extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <ReactScrollbar style={this.props.style}>
        <div className='lu-scroll-content'>
          {this.props.children}
        </div>
      </ReactScrollbar>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LucioleScrollbar.propTypes = {
  style: PropTypes.object
}

/**
 * Export the component
 */
export default LucioleScrollbar
