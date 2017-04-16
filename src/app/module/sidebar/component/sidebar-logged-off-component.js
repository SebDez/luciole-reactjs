import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuI18n from './../../../common/component/i18n/luciole-i18n-component'
import LuLoginModal from './../../../common/auth/component/login-modal-component'

/**
 * SidebarLoggedOff Component
 */
export class SidebarLoggedOff extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <LuLoginModal show={this.props.showLoginModal} handleLogin={() => console.log('handleLogin')}
          handleClose={() => console.log('handleClose')} handleSignup={() => console.log('handleSignup')} />
        <div className='sidebar-content off'>
          <div className='sidebar-button' onClick={this.props.logUserIn}>
            <LuI18n value='application.sidebar.play' lang={this.props.lang} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedOff.propTypes = {
  logUserIn: PropTypes.func.isRequired,
  lang: PropTypes.string,
  showLoginModal: PropTypes.bool.isRequired
}

/**
 * Export the component
 */
export default SidebarLoggedOff
