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
    this.isValidUsername = this.isValidUsername.bind(this)
    /** @type {Function}*/
    this.isValidPassword = this.isValidPassword.bind(this)
    /** @type {Function}*/
    this.isSamePassword = this.isSamePassword.bind(this)
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
   * Check if given field is a valid username
   * @type {string} value The value to check
   * @return {string} The error message to show, undefined if the value is valid
   */
  isValidUsername (value) {
    let regex = /^[a-zA-Z0-9\s]+$/
    if (!value || value.length < 4 || value.length > 20) {
      return this.i18n.t('forms.usernameLengthInvalid')
    } else if (typeof value !== 'string' || !regex.test(value)) {
      return this.i18n.t('forms.usernameContentInvalid')
    }
    return undefined
  }

  /**
   * Check if given field is a valid password
   * @type {string} value The value to check
   * @return {string} The error message to show, undefined if the value is valid
   */
  isValidPassword (value) {
    if (!value || value.length < 8 || value.length > 20) {
      return this.i18n.t('forms.passwordLengthInvalid')
    } else if (typeof value !== 'string') {
      return this.i18n.t('forms.passwordContentInvalid')
    }
    return undefined
  }

  /**
   * Check if given password2 is the same as password1
   * @type {string} value The value to check
   * @type {Object} form The form values
   * @return {string} The error message to show, undefined if the value is valid
   */
  isSamePassword (value, form) {
    if (value && form && form.password1 && (value !== form.password1)) {
      return this.i18n.t('forms.passwordNotEqual')
    }
    return undefined
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
   * @type {FormHelper} formHelper The formHelper to use
   * @type {string} input The value of the field
   * @type {string} label The label and placeholder for this field
   * @type {string} type The type of field
   * @type {boolean} touched Is the field modified
   * @type {string} error The error message to show
   * @type {string} warning The warning message to show
   * @type {Object} prefix The prefix object for the field {type: text or icon, value: text or icon name}
   * @return {Object} The element to render
   */
  renderField ({ formHelper, input, label, type, meta: { touched, error, warning }, prefix }) {
    const state = formHelper.getValidationState(touched, error, warning)
    const elmClass = formHelper.getFieldClass(touched, error)
    return (
      <div>
        <FormGroup controlId={input.name} validationState={state}>
          {formHelper.getControlLabel(label)}
          {formHelper.getInputGroup(type, input, label, prefix, elmClass)}
          {touched && ((error && formHelper.renderInfoField('error', error)) ||
            (warning && formHelper.renderInfoField('warning', warning))
          )}
          <FormControl.Feedback />
        </FormGroup>
      </div>
    )
  }

/**
 * Get the formcontrol validation state according to the input state
 * @type {boolean} touched Is the field modified
 * @type {string} error The error message to show
 * @type {string} warning The warning message to show
 * @return {string} The validation state string or null if not touched
 */
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

/**
 * Get the control label is there is one to be show
 * @type {string} label The label to show or null
 * @return {Object} The element to render
 */
  getControlLabel (label) {
    return label ? (<ControlLabel>{label}</ControlLabel>) : null
  }

/**
 * Get Inputgroup element according to the prefix and formcontrol configuration
 * @type {string} input The value of the field
 * @type {string} label The label and placeholder for this field
 * @type {string} type The type of field
 * @type {Object} prefix The prefix object for the field {type: text or icon, value: text or icon name}
 * @type {string} elmClass The class to apply to element
 * @return {Object} The element to render
 */
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

/**
 * Get prefix element for input field according to prefix type (text or icon) and field type
 * @type {Object} prefix The prefix object for the field {type: text or icon, value: text or icon name}
 * @type {string} type The type of field
 * @return {Object} The element to render or null is there is no prefix or field's type is textarea
 */
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

  /**
   * Get the form control element according to input type (text/email/password/textarea)
   * @type {string} type The type of field
   * @type {string} input The value of the field
   * @type {string} label The label and placeholder for this field
   * @return {Object} The element to render or null if type not in text/email/password/textarea
   */
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
