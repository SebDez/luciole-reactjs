import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * SidebarLoggedOff Component
 */
export class SidebarLoggedOff extends React.Component {

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
        <div className='sidebar-content off'>
          <div className='sidebar-button' onClick={this.props.logUserIn}>Jouer</div>
        </div>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedOff.propTypes = {
  logUserIn: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default SidebarLoggedOff
