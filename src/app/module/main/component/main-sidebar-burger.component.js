import React, {PropTypes} from 'react'
import FontAwesome from 'react-fontawesome'
import LucioleComponent from './../../../common/core/abstract/luciole-component'

/**
 * MainPageSidebarBurger Component
 */
class MainPageSidebarBurger extends LucioleComponent {

  /**
   * Create a new MainPageSidebarBurger component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('handleBurgerClick')
  }

/**
 * Handle the burger on click event
 * by calling onclick callback in props
 */
  handleBurgerClick () {
    this.props.onClick()
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <div className='hand-over burger-menu' onClick={this.handleBurgerClick}>
          <img src='./../../../../assets/img/luciole_mini_logo.png' alt='mini_logo' />
          <FontAwesome className='sidebar-burger' name='bars' />
        </div>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
MainPageSidebarBurger.propTypes = {
  onClick: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default MainPageSidebarBurger
