import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuI18n from './../../../common/component/i18n/luciole-i18n-component'
import LuLoginModal from './../../../common/auth/component/login-modal-component'
import SignUpLoginModal from './../../../common/auth/component/signup-modal-component'

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
        <LuLoginModal show={this.props.showLoginModal} handleLogin={this.props.handleLogin}
          handleClose={this.props.handleCloseModal} handleSignup={this.props.openSignUpModal} />
        <SignUpLoginModal show={this.props.showSignUpModal} handleClose={this.props.handleCloseSignUpModal}
          handleSignUp={this.props.handleSignUp} />
        <div className='sidebar-content off'>
          <div className='sidebar-button' onClick={this.props.openLoginModal}>
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
  openLoginModal: PropTypes.func.isRequired,
  lang: PropTypes.string,
  showLoginModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
  showSignUpModal: PropTypes.bool.isRequired,
  handleCloseSignUpModal: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default SidebarLoggedOff
