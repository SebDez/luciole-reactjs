import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'

/**
 * ContactForm Component
 */
class ContactFormComponent extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form className='luciole-form' onSubmit={this.props.handleSubmit}>
        <Field name='username' type='text'
          component={this.formHelper.renderField.bind(this.formHelper)} label='Username'
          validate={[ this.formHelper.isRequired, this.formHelper.isMoreThanMaxLength(15) ]}
          warn={this.formHelper.adviceDemo}
        />
        <Field name='email' type='email'
          component={this.formHelper.renderField.bind(this.formHelper)} label='Email'
          validate={[ this.formHelper.isRequired, this.formHelper.isValidEmail ]}
        />
        <Field name='content' type='text'
          component={this.formHelper.renderField.bind(this.formHelper)} label='Content'
          validate={[ this.formHelper.isRequired, this.formHelper.isLessThanMinLength(5) ]}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
ContactFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'contact' // a unique name for this form
})(ContactFormComponent)
