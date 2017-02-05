import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import { Field, reduxForm } from 'redux-form'

/**
 * ContactForm Component
 */
class ContactFormComponent extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <Field name='firstName' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Field name='email' component='input' type='email' />
        </div>
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
