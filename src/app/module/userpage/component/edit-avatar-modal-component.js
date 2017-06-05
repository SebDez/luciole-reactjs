import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Modal } from 'react-bootstrap'
import EditAvatarFormComponent from './edit-avatar-form-component'

/**
 * EditAvatarModal Component
 * A component for the edit avatar modal
 */
class EditAvatarModal extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Modal show={this.props.show} dialogClassName='lu-modal avatar-modal' onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.i18n.t('application.userpage.editAvatar.modalTitle')}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <EditAvatarFormComponent onSubmit={this.props.handleEdit} handleCancel={this.props.handleClose}
              avatar={this.props.avatar} />
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
EditAvatarModal.propTypes = {
  show: PropTypes.bool.isRequired,
  avatar: PropTypes.object,
  handleEdit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default EditAvatarModal
