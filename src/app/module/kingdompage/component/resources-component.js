import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceDetailComponent from './resource-detail-component'
import Constants from './../../../common/constants'
import LucioleScrollbar from './../../../common/component/lu-scrollbar/lu-scrollbar-component'

/**
 * ResourcesComponent Component
 */
class ResourcesComponent extends LucioleComponent {

  /**
   * Create a new ResourcesComponent component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('getResourceDetailElements')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const resources = this.getResourceDetailElements()
    const scrollBarStyle = {
      'height': '70vh'
    }
    return (
      <Grid className='lu-grid'>
        <h2>{this.i18n.t('application.kingdompage.resources.title')}</h2>
        <LucioleScrollbar style={scrollBarStyle}>
          <Row className='lu-resources'>
            {resources}
          </Row>
        </LucioleScrollbar>
      </Grid>)
  }

  /**
   * Get the resource's detail element list to show
   * @returns {Object} React component tree
   * @memberof ResourcesComponent
   */
  getResourceDetailElements () {
    return Constants.KINGDOM.RESOURCES_LIST.map((res, i) => {
      return (
        <Col xs={12} md={3} className='res-elm' key={i} >
          <ResourceDetailComponent lang={this.props.lang} resource={res}
            production={this.props.resources[`${res}${Constants.RESOURCES.PRODUCTION}`]}
            storage={this.props.resources[`${res}${Constants.RESOURCES.STORAGE}`]}
            latestHarvest={this.props.resources[`${Constants.RESOURCES.LATEST}${res}${Constants.RESOURCES.HARVEST}`]}
            amount={this.props.resources[`${res}${Constants.RESOURCES.AMOUNT}`]}
            harvestInterval={this.props.resources[`${res}${Constants.RESOURCES.INTERVAL}`]} />
        </Col>)
    })
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
ResourcesComponent.propTypes = {
  lang: PropTypes.string,
  resources: PropTypes.object.isRequired
}

/**
 * Export the component
 */
export default ResourcesComponent
