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
    const theme = this.props.theme || 'dark'
    const {touched, error} = this.props.meta
    return (
      <div>
        <ReCAPTCHA
          ref='recaptcha'
          sitekey={this.props.recaptchaKey}
          onChange={this.props.input.onChange}
          theme={theme}
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
  recaptchaKey: PropTypes.string.isRequired,
  theme: PropTypes.string
}

/**
 * Export the component
 */
export default LuRecaptcha
