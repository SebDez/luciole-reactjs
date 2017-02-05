import {modal} from 'react-redux-modal'
import objectAssign from 'object-assign'

/**
 * Modal Helper class
 * Used to create modals
 */
export default class ModalHelper {

  /**
   * Create a new Modal Helper
   */
  constructor () {
    /** @type {Object}*/
    this.modalService = modal
    /** @type {Object}*/
    this.defaultOptions = {
      title: 'Luciole',
      size: 'medium',
      closeOnOutsideClick: true,
      hideTitleBar: false,
      hideCloseButton: false
    }
  }

  /**
   * Add a new modal
   * OPTIONS :
   * title: string
   * size: string, [large, medium, small]
   * closeOnOutsideClick: boolean,
   * hideTitleBar: boolean
   * hideCloseButton: boolean
   * ... all what you put in here you will get access in the modal props
   * @type {Object} component The react component to inject
   * @type {Object} options Options for the modal
   */
  openModal (component, options) {
    const opt = objectAssign({}, this.defaultOptions, options)
    this.modalService.add(component, opt)
  }
}
