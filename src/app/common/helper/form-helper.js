import React from 'react'
import FontAwesome from 'react-fontawesome'

/**
 * Form Helper class
 * Used to manage forms and validations
 */
export default class FormHelper {

/**
 * Check if given field is required or not
 * @type {string} value The value to check
 * @return {string} The error message to show, undefined if the value is valid
 */
  isRequired (value) {
    return value ? undefined : 'Required'
  }

  /**
   * Check if given field has its length over a maximun value
   * @type {number} max The maxmimun length allowed
   * @return {string} The error message to show, undefined if the value is valid
   */
  isMoreThanMaxLength (max) {
    return value => value && value.length > max ? `Must be ${max} characters or less` : undefined
  }

  /**
   * Check if given field is a number
   * @type {Object} value The object to check
   * @return {string} The error message to show, undefined if the value is a number
   */
  isNumber (value) {
    return value && isNaN(Number(value)) ? 'Must be a number' : undefined
  }

  /**
   * Check if given field has its length under a min value
   * @type {number} min The min length allowed
   * @return {string} The error message to show, undefined if the value is valid
   */
  isLessThanMinLength (min) {
    return value => value && value.length < min ? `Must be at least ${min}` : undefined
  }

  /**
   * Check if given field is a valid email
   * @type {string} value The value to check
   * @return {string} The error message to show, undefined if the value is valid
   */
  isValidEmail (value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
  }

  /**
   * Example for warning message, check if value equals train
   * @type {string} value The value to check
   * @return {string} The error message to show, undefined if the value is valid
   */
  adviceDemo (value) {
    return value && value === 'train' ? 'Oh ! You like trains too ?!' : undefined
  }

  /**
   * Render the field element
   * @type {Object} params The params for redux form
   * @type {string} input The value of the field
   * @type {string} label The label and placeholder for this field
   * @type {string} type The type of field
   * @type {boolean} touched Is the field modified
   * @type {string} error The error message to show
   * @type {string} warning The warning message to show
   * @return {Object} The element to render
   */
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

  /**
   * Render the input field element
   * @type {string} input The value of the field
   * @type {string} label The label and placeholder for this field
   * @type {string} type The type of field
   * @type {boolean} touched Is the field modified
   * @type {string} error The error message to show
   * @return {Object} The element to render
   */
  getInputElement (input, label, type, touched, error) {
    if (type === 'text' || type === 'email') {
      return (<input {...input} placeholder={label} type={type} className={this.getFieldClass(touched, error)} />)
    } else if (type === 'textarea') {
      return (<textarea {...input} placeholder={label} type={type} className={this.getFieldClass(touched, error)} />)
    }
  }

/**
 * Get class for field element (error or not)
 * @type {boolean} touched Is the field modified
 * @type {string} error The error message to show
 * @return {string} The class name to apply or false
 */
  getFieldClass (touched, error) {
    return touched && (error && 'field-error')
  }

/**
 * Get the right props for validation tooltip as class or icon to use
 * @type {string} type The type of validation tooltip (error or warning)
 * @return {string} The class name to apply or false
 */
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

/**
 * Render the validation tooltip element
 * @type {string} type The type of tooltip
 * @type {string} message The message to show
 * @return {Object} The element to render
 */
  renderInfoField (type, message) {
    const props = this.getFieldLabelProp(type)
    return (
      <div className={props.class}>
        <FontAwesome name={props.icon} />
        <span>{message}</span>
      </div>)
  }
}
