import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Modal } from 'react-bootstrap'
import SignUpFormComponent from './signup-form-component'

/**
 * SignUpLoginModal Component
 * A component for the signup modal
 */
class SignUpLoginModal extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Modal show={this.props.show} dialogClassName='lu-modal' onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.i18n.t('application.signup.title')}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SignUpFormComponent onSubmit={this.props.handleSignUp} />
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
SignUpLoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default SignUpLoginModal
