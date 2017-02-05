import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Field, reduxForm } from 'redux-form'
import FormHelper from './../../../common/helper/form-helper'

/**
 * ContactForm Component
 */
class ContactFormComponent extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const f = new FormHelper()
    return (
      <form className='luciole-form' onSubmit={this.props.handleSubmit}>
        <Field name='username' type='text'
          component={f.renderInputField.bind(f)} label='Username'
          validate={[ f.isRequired, f.isMoreThanMaxLength(15) ]}
          warn={f.adviceDemo}
        />
        <Field name='email' type='email'
          component={f.renderInputField.bind(f)} label='Email'
          validate={f.isValidEmail}
        />
        <Field name='content' type='text'
          component={f.renderTextAreaField.bind(f)} label='Content'
          validate={[ f.isRequired, f.isLessThanMinLength(5) ]}
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
