import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import LucioleComponent from './../../../common/core/abstract/luciole-component'

/**
 * MainLangCard Component
 */
class MainLangCard extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div className='hand-over main-lang-card'>
        <FontAwesome name='globe' />
        <p className='lang-style'>{this.props.currentLang}</p>
        <FontAwesome name='angle-down' />
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
MainLangCard.propTypes = {
  currentLang: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default MainLangCard
