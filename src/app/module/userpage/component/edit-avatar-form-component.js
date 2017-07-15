import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { reduxForm } from 'redux-form'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'
import { Grid, Row, Col } from 'react-bootstrap'
import Constants from './../../../common/constants'
import config from 'config'
import UserService from './../service/user-service'
import UserPageActions from './../action/userpage-action'

/**
 * EditAvatarFormComponent Component
 */
export class EditAvatarFormComponent extends FormComponent {

  /**
   * Create a new EditAvatarFormComponent component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.selected = null
    /** @type {Object}*/
    this.appConf = config
    /** @type {UserService}*/
    this.userService = new UserService()
    /** @type {UserService}*/
    this.userPageActions = new UserPageActions()
    this._bindThisToMethods('submit')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const avatarSrc = this.selected ? `${this.selected}` : `${this.props.avatar.selected}`
    return (
      <div className='luciole-form avatar-form'>
        <Grid className='lu-grid'>
          <Row>
            <Col className='sidebar-block-col' xs={12} md={4}>
              <div className='userpage-avatar'>
                <UserAvatar src={avatarSrc} />
              </div>
            </Col>
            <Col className='sidebar-block-col' xs={12} md={8}>
              <div className='lu-container lu-scroll'>
                <Row>
                  {this.getChoices()}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='sidebar-block-col' xs={12} md={12}>
              <div className='luciole-duo-buttons'>
                <div className='luciole-buttons lu-cancel-btn' onClick={this.props.handleCancel}>{this.i18n.t('application.userpage.editAvatar.cancel')}</div>
                <button className='luciole-buttons' onClick={this.submit} disabled={!this.selected}>
                  {this.i18n.t('application.userpage.editAvatar.submit')}
                </button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

/**
 * Before rendering the component
 * Get and set the full avatars list
 */
  componentWillMount () {
    if (!this.props.avatarList || this.props.avatarList.length === 0) {
      this.props.dispatch(this.userPageActions.getAvatarList())
    }
  }

/**
 * Render avatar choices element
 * @return {Object} The choices element list
 */
  getChoices () {
    return this.props.avatarList.map((choice, i) => {
      const src = `${this.appConf.img.src}/${choice}`
      let imgClass = null
      if (this.props.avatar.availableList.indexOf(choice) === -1) {
        imgClass = ' disabled'
      } else if ((!this.props.avatar.selected && choice === Constants.USER.AVATAR.DEFAULT) ||
      this.selected === choice || (!this.selected && choice === this.props.avatar.selected)) {
        imgClass = ' selected'
      }
      return (
        <Col key={i} className='sidebar-block-col lu-square-choice' xs={6} md={3}>
          <img src={src} className={imgClass}
            onClick={this.selectAvatar.bind(this, choice)} />
        </Col>)
    })
  }

/**
 * Select an avatar on preview
 * @param {string} choice The avatar choice string
 */
  selectAvatar (choice) {
    if (this.props.avatar.availableList.indexOf(choice) > -1) {
      this.selected = choice === this.props.avatar.selected ? null : choice
      this.forceUpdate()
    }
  }

/**
 * Submit the modifications
 */
  submit () {
    this.props.onSubmit(this.selected)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
EditAvatarFormComponent.propTypes = {
  avatar: PropTypes.object.isRequired,
  avatarList: PropTypes.array.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'edit-avatar' // a unique name for this form
})(EditAvatarFormComponent)
