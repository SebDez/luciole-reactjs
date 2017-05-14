import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Modal } from 'react-bootstrap'
import SignInFormComponent from './signin-form-component'

/**
 * SignInLoginModal Component
 * A component for the signin modal
 */
class SignInLoginModal extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Modal show={this.props.show} dialogClassName='lu-modal' onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.i18n.t('application.signin.title')}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SignInFormComponent onSubmit={this.props.handleSignIn} />
          </Modal.Body>

        </Modal.Dialog>
      </Modal>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SignInLoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default SignInLoginModal
