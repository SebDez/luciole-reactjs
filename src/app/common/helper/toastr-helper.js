import {toastr} from 'react-redux-toastr'
import objectAssign from 'object-assign'

/**
 * Toastr Helper class
 * Used to manage app toastr
 */
export default class ToastrHelper {

  /**
   * Create a new Toastr Helper
   */
  constructor () {
    /** @type {Object}*/
    this.toastrService = toastr
    /** @type {Array}*/
    this.toastrTypes = ['success', 'info', 'warning', 'error']
    /** @type {Object}*/
    this.defaultOptions = {
      timeOut: 10000,
      icon: null,
      className: null,
      showCloseButton: true,
      progressBar: true,
      removeOnHover: null,
      onCloseButtonClick: null,
      onShowComplete: null,
      onHideComplete: null,
      transitionIn: 'bounceIn',
      transitionOut: 'bounceOut'
    }
  }

  /**
   * Show a toastr
   * OPTIONS :
   * timeOut : number, 0 it will prevent the auto close
   * icon : component, you can add any component you want but note the the with and height are 70px ;)
   * className : string
   * component : a react component to mount
   * showCloseButton : boolean,true by default
   * progressBar : boolean
   * removeOnHover : boolean
   * onCloseButtonClick : callback on close
   * onShowComplete : callback at show animation's end
   * onHideComplete : callback at hide animation's end
   * transitionIn : string, [bounceIn, bounceInDown, fadeIn]
   * transitionOut : string, [bounceOut, bounceOutUp, fadeOut]
   * @type {string} type Toastr type between : success, info, warning, error
   * @type {Object} title Title of the toastr
   * @type {Object} message Message for the toastr
   * @type {Object} options Options for the toastr
   */
  showMessage (type, title, message, options) {
    const opt = objectAssign({}, this.defaultOptions, options)
    if (this.toastrTypes.indexOf(type) > -1) this.toastrService[type](title, message, opt)
  }
}
