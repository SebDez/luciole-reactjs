import React, { PropTypes } from 'react'
import ReactSVG from 'react-svg'
import LucioleComponent from './../abstract/luciole-component'

/**
 * LucioleSVG Component
 */
class LucioleSVG extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <ReactSVG
          path={this.props.path}
          className={this.props.class}
          callback={this.props.callback}
        />
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LucioleSVG.propTypes = {
  path: PropTypes.string.isRequired,
  class: PropTypes.string,
  callback: PropTypes.func
}

/**
 * Export the component
 */
export default LucioleSVG