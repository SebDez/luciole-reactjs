import React, { PropTypes } from 'react'
import ResourceIcon from './../../../common/component/resource/resource-icon-component'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import ReactTooltip from 'react-tooltip'
import ToStringHelper from './../../../common/helper/toString-helper'

/**
 * SidebarLineResources Component
 */
class SidebarLineResources extends LucioleComponent {

  /**
   * Create a new SidebarLineResources component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {ToStringHelper}*/
    this.toStringHelper = new ToStringHelper()
    this._bindThisToMethods('getToolTipDataFromResource')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const toolTip = this.getToolTipDataFromResource()
    return (
      <div className='resource-line' data-tip={toolTip.text} data-place='top' data-type={toolTip.style}>
        <ResourceIcon withCircle resourceName={this.props.resourceName} />
        <div className={`resource-line-text resource-${toolTip.style}`}>{this.toStringHelper.getNumberFormatted(this.props.amount)}</div>
        <ReactTooltip />
      </div>)
  }

  /**
   * Get tooltip format object according to percentage between amount and storage
   * @return {object}  Tooltip format object
   */
  getToolTipDataFromResource () {
    const percentage = Math.floor((this.props.amount * 100) / this.props.storage)
    const amount = this.toStringHelper.getNumberFormatted(this.props.amount)
    const storage = this.toStringHelper.getNumberFormatted(this.props.storage)
    const text = `(${percentage}%) ${amount}/${storage}`
    if (percentage <= 60) {
      return {style: 'success', text}
    } else if (percentage >= 61 && percentage <= 90) {
      return {style: 'warning', text}
    } else {
      return {style: 'error', text}
    }
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLineResources.propTypes = {
  resourceName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  storage: PropTypes.number.isRequired
}

/**
 * Export the component
 */
export default SidebarLineResources
