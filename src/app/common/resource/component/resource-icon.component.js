import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * ResourceIcon Component
 */
class ResourceIcon extends React.Component {

  /**
   * Create a new ResourceIcon component
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
    const iconClass = this.props.withCircle ? 'resource-icon-circle' : 'resource-icon-no-circle'
    const resourceIcon = `resource-${this.props.resourceName}`
    return (
      <div className={`${iconClass} ${resourceIcon}`}>
        X
      </div>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
ResourceIcon.propTypes = {
  withCircle: PropTypes.bool,
  resourceName: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default ResourceIcon
