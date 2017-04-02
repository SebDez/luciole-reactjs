import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import ReCAPTCHA from 'react-google-recaptcha'

/**
 * Recaptcha Component
 * A component used for recaptchas
 */
class LuRecaptcha extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const {touched, error} = this.props.meta
    return (
      <div>
        <ReCAPTCHA
          ref='recaptcha'
          sitekey={this.props.recaptchaKey}
          onChange={this.props.input.onChange}
          theme='dark'
          className='g-recaptcha'
        />
        {touched && error && this.formHelper.renderInfoField('error', error)}
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuRecaptcha.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  recaptchaKey: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default LuRecaptcha
