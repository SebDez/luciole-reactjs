import React, { PropTypes } from 'react'
import LucioleComponent from './../../core/abstract/luciole-component'
import Constants from './../../constants'
import config from 'config'

/**
 * UserAvatar Component
 * A component used to show user's avatar in circle
 */
class UserAvatar extends LucioleComponent {

  /**
   * Create a new UserAvatar component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.appConf = config
    this._bindThisToMethods('showDefaultOnError')
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const src = `${this.appConf.img.src}/${this.props.src}`
    return (
      <div className='user-avatar'>
        <img src={src} onError={this.showDefaultOnError} />
      </div>)
  }

  /**
   * On img load error, print default avatar
   */
  showDefaultOnError (event) {
    event.target.setAttribute('src', `${this.appConf.img.src}/${Constants.USER.AVATAR.DEFAULT}`)
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
