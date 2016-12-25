import React from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'

/**
 * WorkInProgress Component
 */
class WorkInProgress extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <h1>WORK IN PROGRESS</h1>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
WorkInProgress.propTypes = {}

/**
 * Export the component
 */
export default WorkInProgress
