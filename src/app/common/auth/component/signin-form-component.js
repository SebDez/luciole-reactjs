import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'
import {Link} from 'react-router'

/**
 * LoginForm Component
 */
export class SignInFormComponent extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form className='luciole-form' onSubmit={this.props.handleSubmit}>
        <Field name='username' type='text'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.signin.username')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidUsername ]} prefix={{type: 'icon', value: 'user'}}
        />
        <Field name='mail' type='email'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.signin.mail')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidEmail ]} prefix={{type: 'text', value: '@'}}
        />
        <Field name='password1' type='password'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.signin.password1')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidPassword ]} prefix={{type: 'icon', value: 'key'}}
        />
        <Field name='password2' type='password'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.signin.password2')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidPassword ]} prefix={{type: 'icon', value: 'key'}}
        />
        <p className='cgu'>
          <Link to='/cgu' target='_blank'> {this.i18n.t('application.signin.cgu')} </Link>
        </p>
        <div className='buttons'>
          <button className='luciole-buttons' type='submit'>{this.i18n.t('application.signin.submit')}</button>
        </div>
      </form>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SignInFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'signin' // a unique name for this form
})(SignInFormComponent)
