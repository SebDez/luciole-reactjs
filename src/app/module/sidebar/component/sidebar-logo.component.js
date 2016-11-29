import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * SidebarLogo Component
 */
class SidebarLogo extends React.Component {

  /**
   * Create a new SidebarLogo component
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
      <div className='sidebar-logo'>
        <img src='../assets/img/luciole_logo.png' alt='Logo' />
      </div>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLogo.propTypes = {}

/**
 * Export the component
 */
export default SidebarLogo
