import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LuciolePageHeader from './../../../common/component/page-header/page-header-component'
import { Grid, Row, Col } from 'react-bootstrap'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'
import UserDatasRead from './../component/user-datas-read-component'
import UserAccountRead from './../component/user-account-read-component'
import UserPageActions from './../action/userpage-action'
import EditUsernameModal from './../component/edit-username-modal-component'
import EditPersonalDatasModal from './../component/edit-personaldatas-modal-component'
import EditAvatarModal from './../component/edit-avatar-modal-component'
import FontAwesome from 'react-fontawesome'

/**
 * UserPage container, used to define the composition of the UserPage screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const UserPage = (props) => {
  return (
    <div>
      <Grid className='lu-grid userpage'>
        <LuciolePageHeader title='application.sidebar.account' icon='user' />
        <Row>
          <Col className='sidebar-block-col' xs={12} md={4}>
            <div className='lu-container userpage-avatar'>
              <div className='corner-button'>
                <FontAwesome name='pencil' onClick={openEditAvatarModal.bind(null, props)} />
              </div>
              <UserAvatar src={props.user.avatar.selected} />
            </div>
          </Col>
          <Col className='sidebar-block-col' xs={12} md={8}>
            <div className='lu-container userpage-account'>
              <UserAccountRead user={props.user} openEditUsernameModal={openEditUsernameModal.bind(null, props)} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='sidebar-block-col' xs={12} md={12}>
            <div className='lu-container'>
              <UserDatasRead user={props.user} openEditPersonalDatasModal={openEditPersonalDatasModal.bind(null, props)} />
            </div>
          </Col>
        </Row>
      </Grid>
      <EditUsernameModal show={props.userPage.modals.showEditUsernameModal}
        username={props.user.username}
        handleEdit={editUsername.bind(null, props)}
        handleClose={closeEditUsernameModal.bind(null, props)} />
      <EditPersonalDatasModal show={props.userPage.modals.showEditPersonalDatasModal}
        user={props.user}
        handleEdit={editPersonalDatas.bind(null, props)}
        handleClose={closeEditPersonalDatasModal.bind(null, props)} />
      <EditAvatarModal show={props.userPage.modals.showEditAvatarModal}
        avatar={props.user.avatar} avatarList={props.avatarList}
        handleEdit={editAvatar.bind(null, props)}
        handleClose={closeEditAvatarModal.bind(null, props)} />
    </div>
  )
}

/**
 * Open the edit username modal
 * @param  {Object} props The props to use
 */
function openEditUsernameModal (props) {
  props.userPageActions.openEditUsernameModalAction()
}

/**
 * Edit the username
 * @param  {Object} props The props to use
 * @param  {Object} params The params to pass
 */
function editUsername (props, params) {
  props.userPageActions.editUsername(params.username)
}

/**
 * Close the edit username modal
 * @param  {Object} props The props to use
 */
function closeEditUsernameModal (props) {
  props.userPageActions.closeEditUsernameModalAction()
}

/**
 * Open the edit user's personal datas modal
 * @param  {Object} props The props to use
 */
function openEditPersonalDatasModal (props) {
  props.userPageActions.openEditPersonalDatasModalAction()
}

/**
 * Edit user's personal datas modal
 * @param  {Object} props The props to use
 * @param  {Object} params The params to pass
 */
function editPersonalDatas (props, params) {
  props.userPageActions.editPersonalDatas(params.birthDate, params.gender,
    params.country, params.region)
}

/**
 * Close the edit user's personal datas modal
 * @param  {Object} props The props to use
 */
function closeEditPersonalDatasModal (props) {
  props.userPageActions.closeEditPersonalDatasModalAction()
}

/**
 * Open the edit avatar modal
 * @param  {Object} props The props to use
 */
function openEditAvatarModal (props) {
  props.userPageActions.openEditAvatarModalAction()
}

/**
 * Edit the avatar
 * @param  {Object} props The props to use
 * @param  {string} avatar The avatar to set
 */
function editAvatar (props, avatar) {
  props.userPageActions.editAvatar(avatar)
}

/**
 * Close the edit avatar modal
 * @param  {Object} props The props to use
 */
function closeEditAvatarModal (props) {
  props.userPageActions.closeEditAvatarModalAction()
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    user: state.application.auth.user,
    userPage: state.application.module.userpage,
    avatarList: state.application.auth.avatarList || []
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {
    userPageActions: bindActionCreators(new UserPageActions(), dispatch)
  }
}

/**
 * The container properties' types
 * @type {Object}
 */
UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  userPage: PropTypes.object.isRequired,
  userPageActions: PropTypes.object.isRequired,
  avatarList: PropTypes.array
}

UserPage.mapStateToProps = mapStateToProps
UserPage.mapDispatchToProps = mapDispatchToProps
UserPage.__testOnly = {
  closeEditUsernameModal,
  editUsername,
  openEditUsernameModal,
  closeEditPersonalDatasModal,
  editPersonalDatas,
  openEditPersonalDatasModal,
  openEditAvatarModal,
  editAvatar,
  closeEditAvatarModal
}

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
