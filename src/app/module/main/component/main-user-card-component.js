import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'
import {Link} from 'react-router'

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
      <Link to='/user'>
        <div className='hand-over main-user-card'>
          <UserAvatar src={this.props.user.avatar.selected} />
          <div className='user-card-username'>{this.props.user.username}</div>
        </div>
      </Link>
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
