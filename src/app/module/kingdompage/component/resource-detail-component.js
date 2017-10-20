import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceIcon from './../../../common/component/resource/resource-icon-component'
import Moment from 'react-moment'
import FontAwesome from 'react-fontawesome'
import ToStringHelper from './../../../common/helper/toString-helper'
import LuTimeCountDown from './../../../common/component/time-countdown/time-countdown-component'
import { I18n } from 'react-redux-i18n'
import Constants from './../../../common/constants'

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
    /** @type {I18n}*/
    this.i18n = I18n
    /** @type {string}*/
    this.PRODUCTION = 'production'
    /** @type {string}*/
    this.STORAGE = 'storage'
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
        <div className='res-dtl-title'>
          <ResourceIcon withCircle resourceName={this.props.resource} />
          <span>{this.i18n.t(`kingdom.resources.${this.props.resource}`)}</span>
        </div>
        <Row>
          <Col xs={12} md={12}>
            {this.getActualResourceContent()}
          </Col>
          <Col xs={12} md={6}>
            {this.getResourceCategoryContent(this.PRODUCTION)}
          </Col>
          <Col xs={12} md={6}>
            {this.getResourceCategoryContent(this.STORAGE)}
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

/**
 * Get current resource element
 * @return {Object} The current resource element
 */
  getActualResourceContent () {
    const amount = this.props.amount
    const storage = this.props.storageHistory && this.props.storageHistory.length > 0 ? this.props.storageHistory.slice(-1)[0] : 0
    const percentage = storage > 0 ? Math.floor((amount * 100) / storage) : 100
    const amountTxt = this.toStringHelper.getNumberFormatted(amount)
    const storageTxt = this.toStringHelper.getNumberFormatted(storage)
    return (
      <div className='r-dtl-actual'>
        <span className='number'>{amountTxt}</span>
        <span className='no-number'>/</span>
        <span className='number'>{storageTxt}</span>
        <span className='no-number'>({percentage} %)</span>
      </div>)
  }

  /**
  * Get resource history element
  * @param {string} category The current category : production or storage
  * @return {Object} The resource history element
  */
  getResourceCategoryContent (category) {
    const history = category === this.PRODUCTION ? this.props.prodHistory : this.props.storageHistory
    const current = history && history.length > 0 ? history.slice(-1)[0] : 0
    const last = history && history.length > 1 ? history.slice(-2)[0] : 0
    return (
      <div className='r-prod'>
        <span className='title'>{this.i18n.t(`application.kingdompage.resources.${category}`)}</span>
        <span className='value'>
          {current}
          <FontAwesome name={this.getTrendArrow(last, current)} />
        </span>
      </div>)
  }

  /**
  * Get resource lastharvest element
  * @return {Object} The resource lastharvest element
  */
  getResourceLastHarvestContent () {
    const last = this.props.lastHarvest
    return (
      <div className='r-last-hrv'>
        <span className='title'>{this.i18n.t('application.kingdompage.resources.lastHarvest')}</span>
        <span className='value'>
          <Moment locale={this.props.lang} fromNow>{last.toString()}</Moment>
        </span>
      </div>)
  }

  /**
  * Get resource next harvest element
  * @return {Object} The resource next harvest element
  */
  getResourceNextHarvestContent () {
    const lastHarvest = this.props.lastHarvest
    const interval = this.props.resourceHarvestInterval
    const date = new Date(lastHarvest.getTime() + interval).toISOString()
    return (
      <div className='r-next-hrv'>
        <span className='title'>{this.i18n.t('application.kingdompage.resources.nextHarvest')}</span>
        <LuTimeCountDown beginDate={lastHarvest.toISOString()}
          lang={this.props.lang} endDate={date} />
      </div>)
  }

/**
 * Get trend arrow after comparing last and current value
 * @param {integer} lastValue The last value to compare
 * @param {integer} currentValue The current value to compare
 * @return {string} The arrow up string if last < current, else return arrow down
 */
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
ResourceDetailComponent.propTypes = {
  resource: PropTypes.oneOf(Constants.RESOURCES.list),
  amount: PropTypes.number.isRequired,
  lastHarvest: PropTypes.instanceOf(Date).isRequired,
  prodHistory: PropTypes.array.isRequired,
  storageHistory: PropTypes.array.isRequired,
  resourceHarvestInterval: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default ResourceDetailComponent
