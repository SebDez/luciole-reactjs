import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SidebarLineResources from './sidebar-line-resources.component'

/**
 * SidebarBlockResources Component
 */
class SidebarBlockResources extends React.Component {

  /**
   * Create a new SidebarBlockResources component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    /** @type {Function}*/
    this.getLineElementForResource = this.getLineElementForResource.bind(this)
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        {this.getLineElementForResource('wood')}
        {this.getLineElementForResource('gold')}
        {this.getLineElementForResource('food')}
      </div>)
  }

  getLineElementForResource (resource) {
    const value = this.props.userResource[resource]
    if (value) {
      return (<SidebarLineResources resourceName={resource} amount={value.amount} />)
    }
    return null
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarBlockResources.propTypes = {
  userResource: PropTypes.object.isRequired
}

/**
 * Export the component
 */
export default SidebarBlockResources
