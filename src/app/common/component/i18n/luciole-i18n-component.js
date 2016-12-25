import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'
import { Translate } from 'react-redux-i18n'

/**
 * LuI18n Component
 * A component used to internartionalize text
 */
class LuI18n extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (<Translate value={this.props.value} />)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuI18n.propTypes = {
  value: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default LuI18n
