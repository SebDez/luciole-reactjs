import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Grid, Row, Col } from 'react-bootstrap'
import UserFieldRead from './user-field-read-component'
import ToStringHelper from './../../../common/helper/toString-helper'

/**
 * UserAccountRead Component
 */
class UserAccountRead extends LucioleComponent {

  /**
   * Create a new UserAccountRead
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
      <Grid className='lu-grid'>
        <h2>{this.i18n.t('application.user.accountTitle')}</h2>
        <Row>
          <Col className='sidebar-block-col' xs={12} md={6}>
            <UserFieldRead label='application.user.username' value={this.props.user.username} />
          </Col>
          <Col className='sidebar-block-col' xs={12} md={6}>
            <UserFieldRead label='application.user.usertag' value={this.props.user.userTag} />
          </Col>
        </Row>
        <Row>
          <Col className='sidebar-block-col' xs={12} md={6}>
            <UserFieldRead label='application.user.mail' value={this.props.user.mail} />
          </Col>
          <Col className='sidebar-block-col buttons' xs={12} md={6}>
            <button className='lu-big-button' type='submit'>{this.i18n.t('application.user.password')}</button>
          </Col>
        </Row>
      </Grid>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
UserAccountRead.propTypes = {
  user: PropTypes.object.isRequired
}

/**
 * Export the component
 */
export default UserAccountRead
