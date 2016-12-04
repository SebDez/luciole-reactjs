import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SidebarLineResources from './sidebar-line-resources.component'
import { Grid, Row, Col } from 'react-bootstrap'

/**
 * SidebarBlockResources Component
 */
class SidebarBlockResources extends React.Component {

  /**
   * Create a new SidebarBlockResources component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    /** @type {Function}*/
    this.getLineElementForResource = this.getLineElementForResource.bind(this)
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
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('gold')}</Col>
        </Row>
        <Row>
          <Col className='sidebar-block-col' xs={12} md={6}>{this.getLineElementForResource('food')}</Col>
        </Row>
      </Grid>)
  }

  getLineElementForResource (resource) {
    const value = this.props.userResource[resource]
    if (value) {
      return (<SidebarLineResources resourceName={resource} amount={value.amount} />)
    }
    return null
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
