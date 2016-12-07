import React, { PropTypes } from 'react'
import ResourceIcon from './../../../common/component/resource/resource-icon.component'
import LucioleComponent from './../../../common/core/abstract/luciole-component'

/**
 * SidebarLineResources Component
 */
class SidebarLineResources extends LucioleComponent {

  /**
   * Create a new SidebarLineResources component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('getAmountFormatted')
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
