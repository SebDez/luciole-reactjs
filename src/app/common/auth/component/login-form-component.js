import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'

/**
 * LoginForm Component
 */
export class LoginFormComponent extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form className='luciole-form' onSubmit={this.props.handleSubmit}>
        <Field name='mail' type='email'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.auth.username')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidEmail ]} prefix={{type: 'icon', value: 'user'}}
        />
        <Field name='password' type='password'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.auth.password')}
          validate={[this.formHelper.isRequired]} prefix={{type: 'icon', value: 'key'}}
        />
        <div className='buttons'>
          <button className='luciole-buttons' type='submit'>{this.i18n.t('application.auth.login')}</button>
        </div>
      </form>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LoginFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'login' // a unique name for this form
})(LoginFormComponent)
