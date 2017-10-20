import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'
import { ProgressBar } from 'react-bootstrap'
import { I18n } from 'react-redux-i18n'

/**
 * LuProgressBar Component
 * A component used to show a progress bar
 * Different kind of progress bar can be done
 * Simple progress bar : fix
 * <LuProgressBar initialValue={42} goalValue={100} noLabel />
 * Simple progress bar with tick
 * <LuProgressBar initialValue={0} goalValue={10} counter={this.counter2} />
 * Time progress bar countdown
 * <LuProgressBar initialValue={initialValue} goalValue={goalValue} counter={this.counter} withDates />
 */
class LuProgressBar extends LucioleComponent {

  /**
   * Create a new LuProgressBar component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {integer}*/
    this.interval = this.props.updateInterval || 1000
    /** @type {I18n}*/
    this.i18n = I18n
    this._bindThisToMethods('tick', 'getPercentageValue', 'endTick',
      'getLabel', 'getTimeBetweenDates')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const percentage = this.getPercentageValue()
    const label = !this.props.noLabel ? this.getLabel() : ''
    const bsStyle = this.props.bsStyle || 'info'
    return (
      <div>
        <ProgressBar active={this.props.active} bsStyle={bsStyle}
          now={percentage} className='lu-progress-bar' label={label} />
      </div>
      )
  }

/**
 * On component update props, reset counter if there is one
 */
  componentWillReceiveProps () {
    if (this.props.counter) {
      let timer = setInterval(this.tick, this.interval)
      this.setState({timer, counter: this.props.initialValue})
    }
  }

/**
 * On component unmount, clear counter if there is one
 */
  componentWillUnmount () {
    if (this.props.counter) {
      this.endTick()
    }
  }

/**
 * Clear interval for counter
 */
  endTick () {
    clearInterval(this.state.timer)
  }

/**
 * Get percentage value for progress bar
 * @return {string} The percentage to show
 */
  getPercentageValue () {
    const counter = this.state && this.state.counter ? this.state.counter : this.props.initialValue
    const percentage = this.props.goalValue > 0 ? Math.floor((counter / this.props.goalValue) * 100) : 0
    return percentage >= 100 ? 100 : percentage
  }

/**
 * Get label for progress bar
 * @return {string} The label to show (can be empty)
 */
  getLabel () {
    const counter = this.state && this.state.counter ? this.state.counter : this.props.initialValue
    if (this.props.withDates) {
      const goalDate = this.props.goalValue - (counter - new Date().getTime())
      const between = this.getTimeBetweenDates(new Date(), new Date(goalDate))
      return between || this.i18n.t('application.kingdompage.resources.harvestEnded')
    }
    return counter
  }

/**
 * Get time between two dates
 * @param {Date} startDate The startDate to compare
 * @param {Date} endDate The endDate to compare
 * @return {string} string time if there is one, or false
 */
  getTimeBetweenDates (startDate, endDate) {
    let second = 1000
    let minute = second * 60
    let hour = minute * 60
    let day = hour * 24
    let distance = endDate - startDate

    if (distance < 0) {
      return false
    }

    let days = Math.floor(distance / day)
    let hours = Math.floor((distance % day) / hour)
    let minutes = Math.floor((distance % hour) / minute)
    let seconds = Math.floor((distance % minute) / second)

    const dayLabel = days <= 1 ? 'progressBar.day_singular' : 'progressBar.day_plural'
    const hourLabel = hours <= 1 ? 'progressBar.hour_singular' : 'progressBar.hour_plural'
    const minLabel = minutes <= 1 ? 'progressBar.min_singular' : 'progressBar.min_plural'
    const secLabel = seconds <= 1 ? 'progressBar.sec_singular' : 'progressBar.sec_plural'

    let between = []
    days > 0 ? between.push(`${days} ${this.i18n.t(dayLabel)}`) : false
    hours > 0 ? between.push(`${hours} ${this.i18n.t(hourLabel)}`) : false
    days <= 0 && minutes > 0 ? between.push(`${minutes} ${this.i18n.t(minLabel)}`) : false
    days <= 0 && hours <= 0 && seconds > 0 ? between.push(`${seconds} ${this.i18n.t(secLabel)}`) : false

    return between.join(' ')
  }

/**
 * Set interval for counter
 */
  tick () {
    const count = this.state && this.state.counter ? this.state.counter : this.props.initialValue
    if (count < this.props.goalValue) {
      this.setState({
        counter: this.props.counter(count)
      })
    } else {
      this.endTick()
    }
  }

}

/**
 * The component properties' types
 * @type {Object}
 */
LuProgressBar.propTypes = {
  initialValue: PropTypes.number.isRequired,
  goalValue: PropTypes.number.isRequired,
  bsStyle: PropTypes.string,
  active: PropTypes.bool,
  updateInterval: PropTypes.number,
  counter: PropTypes.func,
  noLabel: PropTypes.bool,
  withDates: PropTypes.bool
}

/**
 * Export the component
 */
export default LuProgressBar
