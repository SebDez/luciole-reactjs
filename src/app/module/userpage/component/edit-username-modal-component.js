import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Modal } from 'react-bootstrap'
import EditUsernameFormComponent from './edit-username-form-component'

/**
 * EditUsernameModal Component
 * A component for the edit username modal
 */
class EditUsernameModal extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Modal show={this.props.show} dialogClassName='lu-modal' onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.i18n.t('application.userpage.editUsername.modalTitle')}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <EditUsernameFormComponent onSubmit={this.props.handleEdit} handleCancel={this.props.handleClose}
              initialValues={{username: this.props.username}} />
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
EditUsernameModal.propTypes = {
  show: PropTypes.bool.isRequired,
  username: PropTypes.string,
  handleEdit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default EditUsernameModal
