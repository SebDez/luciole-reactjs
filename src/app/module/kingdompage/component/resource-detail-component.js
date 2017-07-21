import React from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceIcon from './../../../common/component/resource/resource-icon-component'
import Moment from 'react-moment'
import FontAwesome from 'react-fontawesome'
import ToStringHelper from './../../../common/helper/toString-helper'
import LuTimeCountDown from './../../../common/component/time-countdown/time-countdown-component'

/**
 * ResourceDetailComponent Component
 */
class ResourceDetailComponent extends LucioleComponent {

  /**
   * Create a new ResourceDetailComponent component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {ToStringHelper}*/
    this.toStringHelper = new ToStringHelper()
    this._bindThisToMethods('getActualResourceContent',
    'getResourceCategoryContent', 'getResourceLastHarvestContent',
    'getResourceNextHarvestContent', 'getTrendArrow')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Grid className='lu-grid lu-container lu-res-dtl'>
        <div className='res-dtl-title'><ResourceIcon withCircle resourceName='goldIngot' /> Lingots d or</div>
        <Row>
          <Col xs={12} md={12}>
            {this.getActualResourceContent()}
          </Col>
          <Col xs={12} md={6}>
            {this.getResourceCategoryContent('Production')}
          </Col>
          <Col xs={12} md={6}>
            {this.getResourceCategoryContent('Storage')}
          </Col>
          <Col xs={12} md={6}>
            {this.getResourceLastHarvestContent()}
          </Col>
          <Col xs={12} md={6}>
            {this.getResourceNextHarvestContent()}
          </Col>
        </Row>
      </Grid>)
  }

  getActualResourceContent () {
    const sto = 1000000
    const percentage = sto > 0 ? Math.floor((800000 * 100) / sto) : 100
    const amount = this.toStringHelper.getNumberFormatted(800000)
    const storage = this.toStringHelper.getNumberFormatted(1000000)
    return (
      <div className='r-dtl-actual'>
        <span className='number'>{amount}</span>
        <span className='no-number'>/</span>
        <span className='number'>{storage}</span>
        <span className='no-number'>({percentage} %)</span>
      </div>)
  }

  getResourceCategoryContent (category) {
    const history = [20, 100]
    const current = history.slice(-1)[0]
    const last = history.slice(-2)[0]
    return (
      <div className='r-prod'>
        <span className='title'>{category}</span>
        <span className='value'>
          {current}
          <FontAwesome name={this.getTrendArrow(last, current)} />
        </span>
      </div>)
  }

  getResourceLastHarvestContent () {
    const last = new Date(2017, 4, 4)
    return (
      <div className='r-last-hrv'>
        <span className='title'>Last harvest</span>
        <span className='value'><Moment fromNow>{last}</Moment></span>
      </div>)
  }

  getResourceNextHarvestContent () {
    const lastHarvest = new Date(2017, 6, 21)
    const interval = 86400000
    const date = new Date(lastHarvest.getTime() + interval).toISOString()
    return (
      <div className='r-next-hrv'>
        <span className='title'>Next Harvest</span>
        <LuTimeCountDown beginDate={lastHarvest.toISOString()} endDate={date} />
      </div>)
  }

  getTrendArrow (lastValue, currentValue) {
    if (lastValue === currentValue) {
      return 'long-arrow-right'
    } else if (lastValue > currentValue) {
      return 'long-arrow-down'
    } else {
      return 'long-arrow-up'
    }
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
ResourceDetailComponent.propTypes = {}

/**
 * Export the component
 */
export default ResourceDetailComponent
