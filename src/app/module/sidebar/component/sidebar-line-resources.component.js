import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ResourceIcon from './../../../common/resource/component/resource-icon.component'

/**
 * SidebarLineResources Component
 */
class SidebarLineResources extends React.Component {

  /**
   * Create a new SidebarLineResources component
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
      <div className='resource-line'>
        <ResourceIcon withCircle resourceName={this.props.resourceName} />
        <div className='resource-line-text'>{this.getAmountFormatted(this.props.amount)}</div>
      </div>)
  }

  getAmountFormatted (amount) {
    return amount.toLocaleString()
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLineResources.propTypes = {
  resourceName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

/**
 * Export the component
 */
export default SidebarLineResources
