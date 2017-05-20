import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'
import LuRecaptcha from './../../../common/component/recaptcha/recaptcha-component'

/**
 * ContactForm Component
 */
export class ContactFormComponent extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form className='luciole-form contact-form' onSubmit={this.props.handleSubmit}>
        <Field name='mail' type='email' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.contact.mail')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidEmail ]} prefix={{type: 'text', value: '@'}}
        />
        <Field name='subject' type='text' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.contact.subject')}
          validate={[ this.formHelper.isRequired, this.formHelper.isLessThanMinLength(5), this.formHelper.isMoreThanMaxLength(100) ]}
          warn={this.formHelper.adviceDemo} prefix={{type: 'icon', value: 'envelope-open'}}
        />
        <Field name='content' type='textarea' formHelper={this.formHelper}
          component={this.formHelper.renderField} label={this.i18n.t('application.contact.content')}
          validate={[ this.formHelper.isRequired, this.formHelper.isLessThanMinLength(10), this.formHelper.isMoreThanMaxLength(2000) ]}
        />
        <div className='recaptcha'>
          <Field name='captcharesponse' component={LuRecaptcha}
            validate={[this.formHelper.isRequired]}
            recaptchaKey={this.props.recaptchaKey} />
        </div>
        <div className='buttons'>
          <button type='submit'>{this.i18n.t('application.contact.submit')}</button>
        </div>
      </form>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
ContactFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  recaptchaKey: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'contact' // a unique name for this form
})(ContactFormComponent)
