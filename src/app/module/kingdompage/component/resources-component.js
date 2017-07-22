import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceDetailComponent from './resource-detail-component'
import Constants from './../../../common/constants'

/**
 * ResourcesComponent Component
 */
class ResourcesComponent extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Grid className='lu-grid'>
        <h2>Mes ressources</h2>
        <Row>
          {this.getAllResourcesDetailElement()}
        </Row>
      </Grid>)
  }

  /**
   * Get detail element for all resources
   * @return {Array} Details elements
   */
  getAllResourcesDetailElement () {
    return Constants.RESOURCES.list.map((resource, id) => {
      return this.getResourceDetailElement(resource, id)
    })
  }

  /**
   * Get resource detail element for a resource
   * @param {resource} resource The resource concerned
   * @param {integer} id The element id
   * @return {Object} The resource detail element
   */
  getResourceDetailElement (resource, id) {
    const lang = this.props.lang
    const resources = this.props.resources
    return (
      <Col key={id} xs={12} md={3} className='res-elm'>
        <ResourceDetailComponent lang={lang} amount={resources[`${resource}Amount`]}
          lastHarvest={resources[`latest${resource}Harvest`]}
          prodHistory={resources[`${resource}ProductionHistory`]}
          storageHistory={resources[`${resource}StorageHistory`]}
          resourceHarvestInterval={resources[`${resource}HarvestInterval`]}
          resource={resource} />
      </Col>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
ResourcesComponent.propTypes = {
  lang: PropTypes.string.isRequired,
  resources: PropTypes.object.isRequired
}

/**
 * Export the component
 */
export default ResourcesComponent
