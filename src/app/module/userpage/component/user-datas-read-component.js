import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Grid, Row, Col } from 'react-bootstrap'
import UserFieldRead from './user-field-read-component'
import ToStringHelper from './../../../common/helper/toString-helper'
import FontAwesome from 'react-fontawesome'

/**
 * UserDatasRead Component
 */
class UserDatasRead extends LucioleComponent {

  /**
   * Create a new UserDatasRead
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {ToStringHelper}*/
    this.toStringHelper = new ToStringHelper()
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <div className='corner-button'>
          <FontAwesome name='pencil' onClick={this.props.openEditPersonalDatasModal} />
        </div>
        <Grid className='lu-grid'>
          <h2>{this.i18n.t('application.user.datasTitle')}</h2>
          <Row>
            <Col className='sidebar-block-col' xs={12} md={6}>
              <UserFieldRead label='application.user.birthDate' value={this.toStringHelper.dateToString(new Date(this.props.user.birthDate))} />
            </Col>
            <Col className='sidebar-block-col' xs={12} md={6}>
              <UserFieldRead label='application.user.gender.label' value={this.toStringHelper.genderToString(this.props.user.gender)} />
            </Col>
          </Row>
          <Row>
            <Col className='sidebar-block-col' xs={12} md={6}>
              <UserFieldRead label='application.user.country' value={this.toStringHelper.countryToString(this.props.user.country)} />
            </Col>
            <Col className='sidebar-block-col' xs={12} md={6}>
              <UserFieldRead label='application.user.region' value={this.toStringHelper.regionToString(this.props.user.region)} />
            </Col>
          </Row>
          <Row>
            <Col className='sidebar-block-col' xs={12} md={6}>
              <UserFieldRead label='application.user.signUpDate' value={this.toStringHelper.dateToString(this.props.user.signUpDate)} />
            </Col>
          </Row>
        </Grid>
      </div>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
UserDatasRead.propTypes = {
  user: PropTypes.object.isRequired,
  openEditPersonalDatasModal: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default UserDatasRead
