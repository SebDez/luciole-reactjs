import React from 'react'
import FontAwesome from 'react-fontawesome'

/**
 * Form Helper class
 * Used to manage forms and validations
 */
export default class FormHelper {

  isRequired (value) {
    return value ? undefined : 'Required'
  }

  isMoreThanMaxLength (max) {
    return value => value && value.length > max ? `Must be ${max} characters or less` : undefined
  }

  isNumber (value) {
    return value && isNaN(Number(value)) ? 'Must be a number' : undefined
  }

  isLessThanMinLength (min) {
    return value => value && value.length < min ? `Must be at least ${min}` : undefined
  }

  isValidEmail (value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
  }

  adviceDemo (value) {
    return value && value === 'train' ? 'Oh ! You like trains too ?!' : undefined
  }

  renderInputField ({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} className={this.getFieldClass(touched, error)} />
          {touched && ((error && this.renderErrorField(error)) ||
            (warning && this.renderWarningField(warning))
          )}
        </div>
      </div>
    )
  }

  renderTextAreaField ({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <textarea {...input} placeholder={label} type={type} className={this.getFieldClass(touched, error)} />
          {touched && ((error && this.renderErrorField(error)) ||
            (warning && this.renderWarningField(warning))
          )}
        </div>
      </div>
    )
  }

  getFieldClass (touched, error) {
    return touched && (error && 'field-error')
  }

  renderErrorField (message) {
    return (
      <div className='field-error-label'>
        <FontAwesome name='exclamation-circle' />
        <span>{message}</span>
      </div>)
  }

  renderWarningField (message) {
    return (
      <div className='field-warning-label'>
        <FontAwesome name='exclamation-triangle' />
        <span>{message}</span>
      </div>)
  }
}
