import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LucioleSVG from './../../core/component/luciole-svg.component'

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
    /** @type {string}*/
    this.pathToSVG = './../../../../assets/svg'
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
        <LucioleSVG class={'svg'} path={`${this.pathToSVG}/resource_${this.props.resourceName}.svg`} />
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
