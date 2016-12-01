import React, {PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FontAwesome from 'react-fontawesome'
/**
 * HomePageSidebarBurger Component
 */
class HomePageSidebarBurger extends React.Component {

  /**
   * Create a new HomePageSidebarBurger component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    /** @type {Function}*/
    this.handleBurgerClick = this.handleBurgerClick.bind(this)
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
        <div className='hand-over' onClick={this.handleBurgerClick}>
          L
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
HomePageSidebarBurger.propTypes = {
  onClick: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default HomePageSidebarBurger
