import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * SidebarLoggedOff Component
 */
class SidebarLoggedOff extends React.Component {

  /**
   * Create a new SidebarLoggedOff component
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
        ----
        <br />
        SidebarLoggedOff
        <br />
        Content when user is logged in
        <br />
        ----
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedOff.propTypes = {}

/**
 * Export the component
 */
export default SidebarLoggedOff
