import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'

/**
 * EditPersonalDatasFormComponent Component
 */
export class EditPersonalDatasFormComponent extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form className='luciole-form' onSubmit={this.props.handleSubmit} >
        <Field name='birthDate' type='text' formHelper={this.formHelper}
          component={this.formHelper.renderDatePickerField} label={this.i18n.t('application.userpage.editPersonalDatas.birthDate')}
          validate={[]}
        />
        <Field name='gender' type='text' formHelper={this.formHelper}
          component={this.formHelper.renderRadioField} label={this.i18n.t('application.userpage.editPersonalDatas.gender')}
          validate={[]} options={this.getOptionsForGender()}
        />
        <div className='luciole-duo-buttons'>
          <button className='luciole-buttons lu-cancel-btn' onClick={this.props.handleCancel}>{this.i18n.t('application.userpage.editPersonalDatas.cancel')}</button>
          <button className='luciole-buttons' type='submit'>{this.i18n.t('application.userpage.editPersonalDatas.submit')}</button>
        </div>
      </form>
    )
  }

  getOptionsForGender () {
    return [{value: '1', label: this.i18n.t('application.user.gender.male')}, {value: '2', label: this.i18n.t('application.user.gender.female')}]
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
EditPersonalDatasFormComponent.propTypes = {
  initialValues: PropTypes.object,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'edit-username' // a unique name for this form
})(EditPersonalDatasFormComponent)
