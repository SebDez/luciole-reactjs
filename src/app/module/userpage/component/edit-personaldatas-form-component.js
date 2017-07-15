import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, Fields, reduxForm } from 'redux-form'

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
        <Fields names={['country', 'region']} component={this.formHelper.renderCountryAndRegionDropdown}
          countryLabel={this.i18n.t('application.userpage.editPersonalDatas.country')}
          regionLabel={this.i18n.t('application.userpage.editPersonalDatas.region')} />
        <div className='luciole-duo-buttons'>
          <div className='luciole-buttons lu-cancel-btn' onClick={this.props.handleCancel}>{this.i18n.t('application.userpage.editPersonalDatas.cancel')}</div>
          <button className='luciole-buttons' type='submit'>{this.i18n.t('application.userpage.editPersonalDatas.submit')}</button>
        </div>
      </form>
    )
  }

  /**
   * Get the options for gender select, return an array of {value, label}
   * @return {Array}           An array of gender options
   */
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
  form: 'edit-personaldatas' // a unique name for this form
})(EditPersonalDatasFormComponent)
