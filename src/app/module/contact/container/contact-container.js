import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContactForm from './../component/contact-form-component'
import ContactActions from './../action/contact-action'
import LuciolePageHeader from './../../../common/component/page-header/page-header-component'

/**
 * ContactPage container, used to define the composition of the ContactPage screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const ContactPage = (props) => {
  return (
    <div>
      <LuciolePageHeader title='application.sidebar.contact' icon='envelope' />
      <div className='lu-container'>
        <ContactForm onSubmit={props.contactActions.sendContactMessage}
          recaptchaKey={props.recaptchaKey} />
      </div>
    </div>
  )
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    recaptchaKey: state.application.app.conf.default.recaptcha.key
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {
    contactActions: bindActionCreators(new ContactActions(), dispatch)
  }
}

/**
 * The container properties' types
 * @type {Object}
 */
ContactPage.propTypes = {}

ContactPage.mapStateToProps = mapStateToProps
ContactPage.mapDispatchToProps = mapDispatchToProps

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage)
