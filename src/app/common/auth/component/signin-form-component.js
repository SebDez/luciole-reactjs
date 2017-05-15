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
        <Field name='username' type='text' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signin.username')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidUsername ]} prefix={{type: 'icon', value: 'user'}}
        />
        <Field name='mail' type='email' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signin.mail')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidEmail ]} prefix={{type: 'text', value: '@'}}
        />
        <Field name='password1' type='password' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signin.password1')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidPassword ]} prefix={{type: 'icon', value: 'key'}}
        />
        <Field name='password2' type='password' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signin.password2')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidPassword, this.formHelper.isSamePassword ]} prefix={{type: 'icon', value: 'key'}}
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