import React from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceDetailComponent from './resource-detail-component'

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
          <Col xs={12} md={3} className='res-elm'>
            <ResourceDetailComponent />
          </Col>
          <Col xs={12} md={3} className='res-elm'>
            <ResourceDetailComponent />
          </Col>
          <Col xs={12} md={3} className='res-elm'>
            <ResourceDetailComponent />
          </Col>
          <Col xs={12} md={3} className='res-elm'>
            <ResourceDetailComponent />
          </Col>
          <Col xs={12} md={3} className='res-elm'>
            <ResourceDetailComponent />
          </Col>
          <Col xs={12} md={3} className='res-elm'>
            <ResourceDetailComponent />
          </Col>
          <Col xs={12} md={3} className='res-elm'>
            <ResourceDetailComponent />
          </Col>
        </Row>
      </Grid>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
ResourcesComponent.propTypes = {}

/**
 * Export the component
 */
export default ResourcesComponent
