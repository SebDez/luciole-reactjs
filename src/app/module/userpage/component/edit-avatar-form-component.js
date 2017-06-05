import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { reduxForm } from 'redux-form'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'
import { Grid, Row, Col } from 'react-bootstrap'

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
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const avatarSrc = this.selected ? this.selected : this.props.avatar.selected
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
 * Render avatar choices element
 * @return {Object} The choices element list
 */
  getChoices () {
    return this.props.avatar.availableList.map((choice, i) => {
      const imgClass = this.selected === choice || (!this.selected && choice === this.props.avatar.selected) ? ' selected' : null
      return (
        <Col key={i} className='sidebar-block-col lu-square-choice' xs={6} md={3}>
          <img src={choice} className={imgClass}
            onClick={this.selectAvatar.bind(this, choice)} />
        </Col>)
    })
  }

/**
 * Select an avatar on preview
 * @param {string} choice The avatar choice string
 */
  selectAvatar (choice) {
    this.selected = choice === this.props.avatar.selected ? null : choice
    this.forceUpdate()
  }

/**
 * Submit the modifications
 */
  submit () {
    this.props.handleSubmit(this.selected)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
EditAvatarFormComponent.propTypes = {
  avatar: PropTypes.object,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'edit-avatar' // a unique name for this form
})(EditAvatarFormComponent)
