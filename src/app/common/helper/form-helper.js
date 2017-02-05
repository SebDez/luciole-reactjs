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

  renderField ({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          {this.getInputElement(input, label, type, touched, error)}
          {touched && ((error && this.renderInfoField('error', error)) ||
            (warning && this.renderInfoField('warning', warning))
          )}
        </div>
      </div>
    )
  }

  getInputElement (input, label, type, touched, error) {
    if (type === 'text' || type === 'email') {
      return (<input {...input} placeholder={label} type={type} className={this.getFieldClass(touched, error)} />)
    } else if (type === 'textarea') {
      return (<textarea {...input} placeholder={label} type={type} className={this.getFieldClass(touched, error)} />)
    }
  }

  getFieldClass (touched, error) {
    return touched && (error && 'field-error')
  }

  getFieldLabelProp (type) {
    if (type === 'warning') {
      return {
        class: 'field-warning-label',
        icon: 'exclamation-triangle'
      }
    } else if (type === 'error') {
      return {
        class: 'field-error-label',
        icon: 'exclamation-circle'
      }
    }
  }

  renderInfoField (type, message) {
    const props = this.getFieldLabelProp(type)
    return (
      <div className={props.class}>
        <FontAwesome name={props.icon} />
        <span>{message}</span>
      </div>)
  }
}
