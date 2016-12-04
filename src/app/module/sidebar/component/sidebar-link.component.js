import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import FontAwesome from 'react-fontawesome'

/**
 * SidebarLink Component
 */
class SidebarLink extends React.Component {

  /**
   * Create a new SidebarLink component
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
      <Link to={this.props.link} className='sidebar-link' onClick={this.props.onClick}>
        <FontAwesome size='2x' className='sidebar-link-icon' name={this.props.icon} />
        <div className='sidebar-link-text'> {this.props.text} </div>
      </Link>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLink.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

/**
 * Export the component
 */
export default SidebarLink
