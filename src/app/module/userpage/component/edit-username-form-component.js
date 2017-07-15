import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'

/**
 * EditUsernameFormComponent Component
 */
export class EditUsernameFormComponent extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form className='luciole-form' onSubmit={this.props.handleSubmit} >
        <Field name='username' type='text' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.userpage.editUsername.username')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidUsername ]} prefix={{type: 'icon', value: 'user'}}
        />
        <div className='luciole-duo-buttons'>
          <div className='luciole-buttons lu-cancel-btn' onClick={this.props.handleCancel}>{this.i18n.t('application.userpage.editUsername.cancel')}</div>
          <button className='luciole-buttons' type='submit'>{this.i18n.t('application.userpage.editUsername.submit')}</button>
        </div>
      </form>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
EditUsernameFormComponent.propTypes = {
  initialValues: PropTypes.object,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'edit-username' // a unique name for this form
})(EditUsernameFormComponent)
