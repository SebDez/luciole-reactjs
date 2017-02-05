import LucioleComponent from './../../core/abstract/luciole-component'
import FormHelper from './../../helper/form-helper'

/**
 * FormComponent Component
 */
class FormComponent extends LucioleComponent {

  /**
   * Create a new FormComponent component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this.formHelper = new FormHelper()
  }

}

/**
 * The component properties' types
 * @type {Object}
 */
FormComponent.propTypes = {}

/**
 * Export the component
 */
export default FormComponent
