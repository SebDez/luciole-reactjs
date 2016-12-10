import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import UserAvatar from './../../../common/component/avatar/user-avatar.component'
/**
 * MainPageUserCard Component
 */
class MainPageUserCard extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div className='hand-over main-user-card'>
        <UserAvatar src={this.props.user.avatar} />
        <div className='user-card-username'>{this.props.user.username}</div>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
MainPageUserCard.propTypes = {
  user: PropTypes.object.isRequired
}

/**
 * Export the component
 */
export default MainPageUserCard
