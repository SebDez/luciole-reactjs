import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'
import LuProgressBar from './../progress-bar/progress-bar-component'

/**
 * LuTimeCountDown Component
 * A component used to show a time countdown
 */
class LuTimeCountDown extends LucioleComponent {

  /**
   * Create a new LuTimeCountDown component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    this._bindThisToMethods('counter')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const endDate = new Date(this.props.endDate).getTime()
    const beginDate = new Date(this.props.beginDate).getTime()
    const goalValue = endDate - beginDate
    const initialValue = new Date().getTime() - beginDate
    return (
      <div>
        <LuProgressBar initialValue={initialValue} goalValue={goalValue}
          counter={this.counter} withDates active />
      </div>)
  }

  counter (value) {
    return value + 1000
  }

  counter2 (value) {
    return value + 1
  }

}

/**
 * The component properties' types
 * @type {Object}
 */
LuTimeCountDown.propTypes = {
  beginDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default LuTimeCountDown
