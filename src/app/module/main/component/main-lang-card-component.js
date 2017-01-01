import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuDropDown from './../../../common/component/dropdown/dropdown-component'
import FontAwesome from 'react-fontawesome'

/**
 * MainLangCard Component
 */
class MainLangCard extends LucioleComponent {

  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('handleClick', 'handleToogle')
  }

  handleClick (key) {
    console.log('got his', key)
  }

  handleToogle () {
    console.log('open/close')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const choices = [
      {key: '1', label: 'FR'},
      {key: '2', label: 'DE'},
      {key: '3', label: 'FE'},
      {key: '4', label: 'DDF4'}
    ]
    return (
      <LuDropDown open id='myid' choices={choices} currSelected='curr'
        containerClass='hand-over main-lang-card' listClass='dpd-lang-list'
        onToggle={this.handleToogle} onSelect={this.handleClick}>
        <FontAwesome name='globe' />
        <p className='lang-style'>{this.props.currentLang}</p>
        <FontAwesome name='angle-down' />
      </LuDropDown>
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
