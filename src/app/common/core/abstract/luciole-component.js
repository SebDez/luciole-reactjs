import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { I18n } from 'react-redux-i18n'

/**
 * LucioleComponent Component
 * A default component for the luciole app.
 * Contain all common methods for components.
 * Every component in this app should extend it.
 */
class LucioleComponent extends React.Component {

  /**
   * Create a new LucioleComponent component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    /** @type {I18n}*/
    this.i18n = I18n
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return null
  }

  /**
   * Bind this to methods
   * @param  {string} methods Method's names to bind
   */
  _bindThisToMethods (...methods) {
    methods.forEach(method => {
      this[method] = this[method].bind(this)
    })
  }
}

/**
 * Export the component
 */
export default LucioleComponent
