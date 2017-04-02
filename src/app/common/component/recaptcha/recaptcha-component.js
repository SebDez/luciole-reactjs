import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'
import ReCAPTCHA from 'react-google-recaptcha'

/**
 * Recaptcha Component
 * A component used for recaptchas
 */
class LuRecaptcha extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <ReCAPTCHA
          ref='recaptcha'
          sitekey={this.props.recaptchaKey}
          onChange={this.props.input.onChange}
          theme='dark'
          className='g-recaptcha'
        />
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
  recaptchaKey: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default LuRecaptcha
