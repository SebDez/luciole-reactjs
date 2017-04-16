import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import LucioleComponent from './../../core/abstract/luciole-component'
import LuI18n from './../i18n/luciole-i18n-component'

/**
 * LuciolePageHeader Component
 * A component used for page's header
 */
class LuciolePageHeader extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div className='page-header'>
        <FontAwesome size='2x' name={this.props.icon} />
        <h2><LuI18n value={this.props.title} /></h2>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuciolePageHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default LuciolePageHeader
