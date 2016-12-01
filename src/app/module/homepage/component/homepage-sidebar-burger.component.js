import React from 'react'
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
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        L
        <FontAwesome className='sidebar-burger' name='bars' />
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
HomePageSidebarBurger.propTypes = {}

/**
 * Export the component
 */
export default HomePageSidebarBurger
