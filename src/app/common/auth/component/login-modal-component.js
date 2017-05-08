import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Modal } from 'react-bootstrap'
import LoginFormComponent from './login-form-component'

/**
 * LuLoginModal Component
 * A component for the login modal
 */
class LuLoginModal extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Modal show={this.props.show} dialogClassName='lu-modal' onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.i18n.t('application.auth.loginTitle')}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <LoginFormComponent onSubmit={this.props.handleLogin} />
          </Modal.Body>

          <Modal.Footer className='separate-footer login-modal'>
            <p>{this.i18n.t('application.auth.goToSignupTitle')}</p>
            <button className='luciole-buttons' onClick={this.props.handleSignup}>{this.i18n.t('application.auth.goToSignup')}</button>
          </Modal.Footer>

        </Modal.Dialog>
      </Modal>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LuLoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default LuLoginModal
