import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import { Dropdown, MenuItem } from 'react-bootstrap'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import MainLangToggle from './main-lang-toggle-component'
import MainLangMenu from './main-lang-menu-component'
/**
 * MainLangCard Component
 */
class MainLangCard extends LucioleComponent {

  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('handleClick', 'onToggle')
    this.defaultOpen = false
    this.isopen = !!this.defaultOpen
  }

  handleClick (key) {
    console.log('got his', key)
    this.isopen = false
  }

  onToggle () {
    this.isopen = true
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Dropdown open={true} onToggle={this.onToggle}
        id='dropdown-custom-menu' className='hand-over main-lang-card'>
        <MainLangToggle bsRole='toggle'>
          <FontAwesome name='globe' />
          <p className='lang-style'>{this.props.currentLang}</p>
          <FontAwesome name='angle-down' />
        </MainLangToggle>
        <MainLangMenu bsRole='menu'>
          <MenuItem className='myitemremovethis' onSelect={this.handleClick} eventKey='FR'>FR</MenuItem>
          <MenuItem onSelect={this.handleClick} eventKey='EN'>EN</MenuItem>
          <MenuItem onSelect={this.handleClick} eventKey='DE'>DE</MenuItem>
        </MainLangMenu>
      </Dropdown>
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
