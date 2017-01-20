import React, { PropTypes } from 'react'
import { Dropdown, MenuItem } from 'react-bootstrap'
import LucioleComponent from './../../core/abstract/luciole-component'
import LuDropdownToggle from './dropdown-toggle-component'
import LuDropdownMenu from './dropdown-menu-component'

/**
 * LuDropDown Component
 * A component to manage dropdown lists
 */
class LuDropDown extends LucioleComponent {

  /**
   * Create a new LuDropDown component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('getMenuItems')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const menuItemList = this.getMenuItems()
    return (
      <div className={this.props.containerClass}>
        <Dropdown open={this.props.open}
          onToggle={this.props.onToggle}
          className={this.props.dropdownClass} id={this.props.id} >
          <LuDropdownToggle bsRole='toggle'>
            {this.props.children}
          </LuDropdownToggle>
          <LuDropdownMenu bsRole='menu' listClass={this.props.listClass} >
            {menuItemList}
          </LuDropdownMenu>
        </Dropdown>
      </div>
    )
  }

/**
 * Get menu's items components
 * @return {Object[]} A list of items
 */
  getMenuItems () {
    const itemList = []
    this.props.choices.forEach((choice, index) => {
      itemList.push(<MenuItem key={index} onSelect={this.props.onSelect} eventKey={choice.key}>{choice.label}</MenuItem>)
    })
    return itemList
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  choices: PropTypes.array.isRequired,
  currSelected: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  containerClass: PropTypes.string,
  listClass: PropTypes.string
}

/**
 * Export the component
 */
export default LuDropDown
