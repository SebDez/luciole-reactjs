import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'

/**
 * LuDropdownToggle Component
 */
class LuDropdownToggle extends LucioleComponent {

  /**
   * Create a new LuDropdownToggle component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('handleClick')
  }

/**
 * Manage click on toggle component
 */
  handleClick (e) {
    e.preventDefault()
    this.props.onClick(e)
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div onClick={this.handleClick}>
        {this.props.children}
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuDropdownToggle.propTypes = {
  onClick: PropTypes.func
}

/**
 * Export the component
 */
export default LuDropdownToggle
