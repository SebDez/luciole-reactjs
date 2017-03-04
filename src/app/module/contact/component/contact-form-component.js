import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Field, reduxForm } from 'redux-form'
import { I18n } from 'react-redux-i18n'

/**
 * ContactForm Component
 */
export class ContactFormComponent extends FormComponent {

  /**
   * Create a new ContactFormComponent
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {I18n}*/
    this.i18n = I18n
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <form className='luciole-form contact-form' onSubmit={this.props.handleSubmit}>
        <Field name='mail' type='email'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.contact.mail')}
          validate={[ this.formHelper.isRequired, this.formHelper.isValidEmail ]}
        />
        <Field name='subject' type='text'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.contact.subject')}
          validate={[ this.formHelper.isRequired, this.formHelper.isLessThanMinLength(5), this.formHelper.isMoreThanMaxLength(100) ]}
          warn={this.formHelper.adviceDemo}
        />
        <Field name='content' type='textarea'
          component={this.formHelper.renderField.bind(this.formHelper)} label={this.i18n.t('application.contact.content')}
          validate={[ this.formHelper.isRequired, this.formHelper.isLessThanMinLength(10), this.formHelper.isMoreThanMaxLength(2000) ]}
        />
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
  handleSubmit: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default reduxForm({
  form: 'contact' // a unique name for this form
})(ContactFormComponent)
