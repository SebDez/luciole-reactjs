import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuDropDown from './../../../common/component/dropdown/dropdown-component'
import FontAwesome from 'react-fontawesome'
import Constants from './../../../common/constants'

/**
 * MainLangCard Component
 */
class MainLangCard extends LucioleComponent {

  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('handleSelect', 'handleClick', 'handleMouseLeave')
  }

  handleSelect (key) {
    this.props.onSelect(key)
  }

  handleClick () {
    this.props.onToggle(this.props.isOpen)
  }

  handleMouseLeave () {
    this.props.onToggle(true)
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const choices = Constants.LANGUAGE
    return (
      <div onMouseLeave={this.handleMouseLeave}>
        <LuDropDown open={this.props.isOpen} id='myid' choices={choices} currSelected='curr'
          containerClass='hand-over main-lang-card' listClass='dpd-lang-list'
          onToggle={this.handleClick} onSelect={this.handleSelect} >
          <FontAwesome name='globe' />
          <p className='lang-style'>{this.props.lang}</p>
          <FontAwesome name='angle-down' />
        </LuDropDown>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
MainLangCard.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  lang: PropTypes.string
}

/**
 * Export the component
 */
export default MainLangCard
