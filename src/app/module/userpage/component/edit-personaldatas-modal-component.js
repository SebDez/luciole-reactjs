import React, { PropTypes } from 'react'
import FormComponent from './../../../common/component/form/form-component'
import { Modal } from 'react-bootstrap'
import EditPersonalDatasFormComponent from './edit-personaldatas-form-component'

/**
 * EditPersonalDatasModal Component
 * A component for the edit user's personal datas (modal)
 */
class EditPersonalDatasModal extends FormComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <Modal show={this.props.show} dialogClassName='lu-modal' onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.i18n.t('application.userpage.editPersonalDatas.modalTitle')}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <EditPersonalDatasFormComponent onSubmit={this.props.handleEdit} handleCancel={this.props.handleClose}
              initialValues={{...this.props.user}} />
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
EditPersonalDatasModal.propTypes = {
  show: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default EditPersonalDatasModal
