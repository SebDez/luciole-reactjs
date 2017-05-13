import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LuciolePageHeader from './../../../common/component/page-header/page-header-component'
import { Grid, Row, Col } from 'react-bootstrap'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'
import UserDatasRead from './../component/user-datas-read-component'
import UserAccountRead from './../component/user-account-read-component'

/**
 * UserPage container, used to define the composition of the UserPage screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const UserPage = (props) => {
  return (
    <Grid className='lu-grid userpage'>
      <LuciolePageHeader title='application.sidebar.account' icon='user' />
      <Row>
        <Col className='sidebar-block-col' xs={12} md={2}>
          <div className='lu-container userpage-avatar'>
            <UserAvatar src={props.user.avatar} />
          </div>
        </Col>
        <Col className='sidebar-block-col' xs={12} md={10}>
          <div className='lu-container userpage-account'>
            <UserAccountRead />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='sidebar-block-col' xs={12} md={12}>
          <div className='lu-container'>
            <UserDatasRead />
          </div>
        </Col>
      </Row>
    </Grid>
  )
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    user: state.application.auth.user
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {}
}

/**
 * The container properties' types
 * @type {Object}
 */
UserPage.propTypes = {
  user: PropTypes.object.isRequired
}

UserPage.mapStateToProps = mapStateToProps
UserPage.mapDispatchToProps = mapDispatchToProps

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage)
