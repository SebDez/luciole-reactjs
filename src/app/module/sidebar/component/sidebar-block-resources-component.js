import React, { PropTypes } from 'react'
import SidebarLineResources from './sidebar-line-resources-component'
import { Grid, Row, Col } from 'react-bootstrap'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import Constants from './../../../common/constants'

/**
 * SidebarBlockResources Component
 */
class SidebarBlockResources extends LucioleComponent {

  /**
   * Create a new SidebarBlockResources component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('getLineElementForResource')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Grid className='sidebar-block-grid'>
        <Row>
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('wood')}</Col>
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('planks')}</Col>
        </Row>
        <Row>
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('stone')}</Col>
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('chippedStone')}</Col>
        </Row>
        <Row>
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('food')}</Col>
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('goldIngot')}</Col>
        </Row>
      </Grid>)
  }

  /**
   * Get line element for a resource
   * @param  {string} resource The resource name
   * @return {Object}          The element to render
   */
  getLineElementForResource (resource) {
    const amount = this.props.userResource[`${resource}${Constants.RESOURCES.AMOUNT}`] || 0
    const storage = this.props.userResource[`${resource}${Constants.RESOURCES.STORAGE}`] && this.props.userResource[`${resource}${Constants.RESOURCES.STORAGE}`].length > 0 ? this.props.userResource[`${resource}${Constants.RESOURCES.STORAGE}`].slice(-1)[0] : 0
    return (<SidebarLineResources resourceName={resource} amount={amount} storage={storage} />)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarBlockResources.propTypes = {
  userResource: PropTypes.object.isRequired
}

/**
 * Export the component
 */
export default SidebarBlockResources
