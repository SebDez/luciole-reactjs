import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuDropDown from './../../../common/component/dropdown/dropdown-component'
import FontAwesome from 'react-fontawesome'
import Constants from './../../../common/constants'

import { browserHistory } from 'react-router'

/**
 * MainLangCard Component
 */
class MainLangCard extends LucioleComponent {
  /**
   * Create a new MainPageSidebarBurger component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('handleSelect', 'handleClick', 'handleMouseLeave')
    /** @type {Object} */
    this.routerActions = browserHistory
  }

/**
 * Manage selection of a language
 * @param  {string} key The selected language's key
 */
  handleSelect (key) {
    this.routerActions.push('/')
    this.props.onSelect(key)
  }

/**
 * Manage the click on component
 */
  handleClick () {
    this.props.onToggle(this.props.isOpen)
  }

/**
 * Close the component on mouse leave
 */
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
        <LuDropDown open={this.props.isOpen} id='myid' choices={choices} currSelected={this.props.lang}
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
