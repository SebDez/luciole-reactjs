import React, { PropTypes } from 'react'
import { Dropdown, MenuItem } from 'react-bootstrap'
import LucioleComponent from './../../core/abstract/luciole-component'
import MainLangToggle from './main-lang-toggle-component'
import MainLangMenu from './main-lang-menu-component'

/**
 * LuDropDown Component
 * A component to manage dropdown lists
 */
class LuDropDown extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Dropdown open={this.props.open} onToggle={this.props.onToggle}
        className={this.props.dropdownClass}>
        <MainLangToggle bsRole='toggle'>
          {this.props.children}
        </MainLangToggle>
        <MainLangMenu bsRole='menu'>
          <MenuItem onSelect={this.onSelect} eventKey='FR'>FR</MenuItem>
          <MenuItem onSelect={this.onSelect} eventKey='EN'>EN</MenuItem>
          <MenuItem onSelect={this.onSelect} eventKey='DE'>DE</MenuItem>
        </MainLangMenu>
      </Dropdown>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuDropDown.propTypes = {
  containerClass: PropTypes.string,
  listClass: PropTypes.string,
  open: PropTypes.boolean.isRequired,
  choices: PropTypes.array.isRequired,
  currSelected: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  onToggle: PropTypes.func
}

/**
 * Export the component
 */
export default LuDropDown
