import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'
import Constants from './../../constants'

/**
 * UserAvatar Component
 * A component used to show user's avatar in circle
 */
class UserAvatar extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const src = this.props.src ? this.props.src : Constants.USER.AVATAR.DEFAULT
    return (
      <div className='user-avatar'>
        <img src={src} />
      </div>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
UserAvatar.propTypes = {
  src: PropTypes.string
}

/**
 * Export the component
 */
export default UserAvatar
