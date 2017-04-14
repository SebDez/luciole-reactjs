import React from 'react'
import FontAwesome from 'react-fontawesome'
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { I18n } from 'react-redux-i18n'

/**
 * Form Helper class
 * Used to manage forms and validations
 */
export default class FormHelper {

  /**
   * Create a new Rest Helper
   */
  constructor () {
    /** @type {I18n}*/
    this.i18n = I18n
    /** @type {Function}*/
    this.isRequired = this.isRequired.bind(this)
    /** @type {Function}*/
    this.isMoreThanMaxLength = this.isMoreThanMaxLength.bind(this)
    /** @type {Function}*/
    this.isNumber = this.isNumber.bind(this)
    /** @type {Function}*/
    this.isLessThanMinLength = this.isLessThanMinLength.bind(this)
    /** @type {Function}*/
    this.isValidEmail = this.isValidEmail.bind(this)
    /** @type {Function}*/
    this.adviceDemo = this.adviceDemo.bind(this)
  }

/**
 * Check if given field is required or not
 * @type {string} value The value to check
 * @return {string} The error message to show, undefined if the value is valid
 */
  isRequired (value) {
    return value ? undefined : this.i18n.t('forms.required')
  }

  /**
   * Check if given field has its length over a maximun value
   * @type {number} max The maxmimun length allowed
   * @return {string} The error message to show, undefined if the value is valid
   */
  isMoreThanMaxLength (max) {
    return value => value && value.length > max ? this.i18n.t('forms.maxLength', {max}) : undefined
  }

  /**
   * Check if given field is a number
   * @type {Object} value The object to check
   * @return {string} The error message to show, undefined if the value is a number
   */
  isNumber (value) {
    return value && isNaN(Number(value)) ? this.i18n.t('forms.numberRequired') : undefined
  }

  /**
   * Check if given field has its length under a min value
   * @type {number} min The min length allowed
   * @return {string} The error message to show, undefined if the value is valid
   */
  isLessThanMinLength (min) {
    return value => value && value.length < min ? this.i18n.t('forms.minLength', {min}) : undefined
  }

  /**
   * Check if given field is a valid email
   * @type {string} value The value to check
   * @return {string} The error message to show, undefined if the value is valid
   */
  isValidEmail (value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? this.i18n.t('forms.emailInvalid') : undefined
  }

  /**
   * Example for warning message, check if value equals train
   * @type {string} value The value to check
   * @return {string} The error message to show, undefined if the value is valid
   */
  adviceDemo (value) {
    return value && value === 'train' ? this.i18n.t('forms.mock') : undefined
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
  renderField ({ input, label, type, meta: { touched, error, warning }, prefix }) {
    const state = this.getValidationState(touched, error, warning)
    const elmClass = this.getFieldClass(touched, error) || 'field-success'
    return (
      <FormGroup controlId={input.name} validationState={state}>
        {this.getControlLabel(label)}
        {this.getInputGroup(type, input, label, prefix, elmClass)}
        {touched && ((error && this.renderInfoField('error', error)) ||
          (warning && this.renderInfoField('warning', warning))
        )}
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  getValidationState (touched, error, warning) {
    if (touched && error) {
      return 'error'
    } else if (touched && warning) {
      return 'warning'
    } else if (touched) {
      return 'success'
    } else {
      return null
    }
  }

  getControlLabel (label) {
    return label ? (<ControlLabel>{label}</ControlLabel>) : null
  }

  getInputGroup (type, input, label, prefix, elmClass) {
    const prefixSupClass = prefix ? '' : 'no-prefix '
    const intputGroupClass = prefixSupClass + elmClass
    return (
      <div className={intputGroupClass}>
        <InputGroup>
          {this.getPrefix(prefix, type)}
          {this.getFormControl(type, input, label)}
        </InputGroup>
      </div>)
  }

  getPrefix (prefix, type) {
    if (type === 'textarea') {
      return null
    } else if (prefix && prefix.type === 'icon') {
      return (<InputGroup.Addon><FontAwesome name={prefix.value} /></InputGroup.Addon>)
    } else if (prefix && prefix.type === 'text') {
      return (<InputGroup.Addon>{prefix.value}</InputGroup.Addon>)
    } else {
      return null
    }
  }

  getFormControl (type, input, label) {
    if (type === 'text' || type === 'email' || type === 'password') {
      return (<FormControl {...input} type={type} placeholder={label} />)
    } else if (type === 'textarea') {
      return (<FormControl {...input} componentClass='textarea' placeholder={label} />)
    } else {
      return null
    }
  }

/**
 * Get class for field element (error or not)
 * @type {boolean} touched Is the field modified
 * @type {string} error The error message to show
 * @return {string} The class name to apply or false
 */
  getFieldClass (touched, error) {
    return touched ? (error ? 'field-error' : 'field-success') : 'field-not-touched'
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
