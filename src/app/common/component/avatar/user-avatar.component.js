import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'

/**
 * UserAvatar Component
 */
class UserAvatar extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div className='user-avatar'>
        <img src={this.props.src} />
      </div>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
UserAvatar.propTypes = {
  src: PropTypes.string.isRequired
}

/**
 * Export the component
 */
export default UserAvatar
