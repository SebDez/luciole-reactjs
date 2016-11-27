import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * SidebarLoggedIn Component
 */
class SidebarLoggedIn extends React.Component {

  /**
   * Create a new SidebarLoggedIn component
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
        SidebarLoggedIn
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
SidebarLoggedIn.propTypes = {}

/**
 * Export the component
 */
export default SidebarLoggedIn
