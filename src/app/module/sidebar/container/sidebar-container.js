import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import SidebarLoggedIn from './../component/sidebar-logged-in-component'
import SidebarLoggedOff from './../component/sidebar-logged-off-component'
import SidebarLogo from './../component/sidebar-logo-component'
import AuthService from './../../../common/auth/service/auth-service'
import AuthActions from './../../../common/auth/action/auth-action'
import SidebarActions from './../action/sidebar-action'
import LuI18n from './../../../common/component/i18n/luciole-i18n-component'

/**
 * Sidebar container, used to define the composition of the Sidebar
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const Sidebar = (props) => {
  const content = getHomePageContentElement(props)
  return (
    <div className='sidebar-container'>
      <SidebarLogo />
      {content}
      <div className='sidebar-footer'>
        <Link to='/cgu'><LuI18n value='application.sidebar.cgu' lang={props.currentLang} /></Link> -
        <Link to='/about'><LuI18n value='application.sidebar.about' lang={props.currentLang} /></Link> -
        <Link to='/contact'><LuI18n value='application.sidebar.contact' lang={props.currentLang} /></Link>
      </div>
    </div>
  )
}

/**
 * Get home page content element according to the user (logged or not)
 * @param  {Object} props The container props
 * @return {Object}       The element to render
 */
function getHomePageContentElement (props) {
  const lang = props.currentLang
  if (isUserLoggedIn(props)) {
    if (props.userResource) {
      return (
        <SidebarLoggedIn lang={lang}
          disconnectUser={disconnectUser.bind(null, props)}
          userResource={props.userResource}
          reloadResources={getUserResources.bind(null, props)}
        />)
    } else {
      getUserResources(props)
    }
  }
  return (<SidebarLoggedOff lang={lang} openLoginModal={openLoginModal.bind(null, props)}
    openSignUpModal={openSignUpModal.bind(null, props)} showSignUpModal={props.auth.modals.showSignUpModal}
    showLoginModal={props.auth.modals.showLoginModal} handleCloseModal={closeLoginModal.bind(null, props)}
    handleCloseSignUpModal={closeSignUpModal.bind(null, props)}
    handleLogin={logUserIn.bind(null, props)} handleSignUp={signUserIn.bind(null, props)} />)
}

/**
 * Disconnect an user
 * @param  {Object} props The container props
 */
function disconnectUser (props) {
  props.authActions.disconnectUser()
}

/**
 * Log an user in
 * @param  {Object} props The container props
 * @param  {Object} credentials The credentials to use
 */
function logUserIn (props, credentials) {
  props.authActions.logUserIn(credentials.mail, credentials.password)
}

/**
 * Open the login modal
 * @param  {Object} props The container props
 */
function openLoginModal (props) {
  props.authActions.openLoginModalAction()
}

/**
 * Close the login modal
 * @param  {Object} props The container props
 */
function closeLoginModal (props) {
  props.authActions.closeLoginModalAction()
}

/**
 * Open the signup modal
 * @param  {Object} props The container props
 */
function openSignUpModal (props) {
  props.authActions.openSignUpModalAction()
}

/**
 * Close the login modal
 * @param  {Object} props The container props
 */
function closeSignUpModal (props) {
  props.authActions.closeSignUpModalAction()
}

/**
 * Sign an user in
 * @param  {Object} props The container props
 * @param  {Object} credentials The credentials to use
 */
function signUserIn (props, datas) {
  props.authActions.signUserIn(datas.username, datas.mail, datas.password1, datas.password2, datas.captcharesponse)
}

/**
 * Check if the user is logged in
 * @param  {Object}  props The container props
 * @return {Boolean}       True if the user is logged in, else false
 */
function isUserLoggedIn (props) {
  return AuthService.isConnected(props)
}

function getUserResources (props) {
  props.sidebarActions.getUserResources()
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    auth: state.application.auth,
    userResource: state.application.module.sidebar.userResource,
    currentLang: state.i18n.locale
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {
    authActions: bindActionCreators(new AuthActions(), dispatch),
    sidebarActions: bindActionCreators(new SidebarActions(), dispatch)
  }
}

/**
 * The container properties' types
 * @type {Object}
 */
Sidebar.propTypes = {
  auth: PropTypes.object.isRequired,
  userResource: PropTypes.object,
  authActions: PropTypes.object.isRequired,
  currentLang: PropTypes.string
}

Sidebar.mapStateToProps = mapStateToProps
Sidebar.mapDispatchToProps = mapDispatchToProps
Sidebar.__testOnly = {
  disconnectUser,
  logUserIn,
  closeLoginModal,
  openLoginModal,
  openSignUpModal,
  closeSignUpModal,
  signUserIn
}

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
