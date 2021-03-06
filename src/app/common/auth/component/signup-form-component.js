import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'
import {Link} from 'react-router'
import LuRecaptcha from './../../../common/component/recaptcha/recaptcha-component'
import config from 'config'

/**
 * LoginForm Component
 */
export class SignUpFormComponent extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const recaptchaKey = config.recaptcha.key
    return (
      <form className='luciole-form' onSubmit={this.props.handleSubmit}>
        <Field name='username' type='text' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signup.username')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidUsername ]} prefix={{type: 'icon', value: 'user'}}
        />
        <Field name='mail' type='email' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signup.mail')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidEmail ]} prefix={{type: 'text', value: '@'}}
        />
        <Field name='password1' type='password' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signup.password1')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidPassword ]} prefix={{type: 'icon', value: 'key'}}
        />
        <Field name='password2' type='password' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.signup.password2')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidPassword, this.formHelper.isSamePassword ]} prefix={{type: 'icon', value: 'key'}}
        />
        <div className='recaptcha'>
          <Field name='captcharesponse' component={LuRecaptcha}
            validate={[this.formHelper.isRequired]} theme='light'
            recaptchaKey={recaptchaKey} />
        </div>
        <p className='cgu'>
          <Link to='/cgu' target='_blank'> {this.i18n.t('application.signup.cgu')} </Link>
        </p>
        <div className='buttons'>
          <button className='luciole-buttons' type='submit'>{this.i18n.t('application.signup.submit')}</button>
        </div>
      </form>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SignUpFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'signup' // a unique name for this form
})(SignUpFormComponent)
