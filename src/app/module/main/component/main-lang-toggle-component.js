import React from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'

/**
 * MainLangToggle Component
 */
class MainLangToggle extends LucioleComponent {

  /**
   * Create a new MainLangToggle component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('handleClick')
  }

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
      <a href='' onClick={this.handleClick}>
        {this.props.children}
      </a>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
MainLangToggle.propTypes = {}

/**
 * Export the component
 */
export default MainLangToggle
