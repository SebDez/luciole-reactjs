import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import HomePageLoggedIn from './../component/homepage-logged-in-component'
import HomePageLoggedOff from './../component/homepage-logged-off-component'
import AuthService from './../../../common/auth/service/auth-service'
import WorkInProgress from './../../../common/component/wip/wip-component'

/**
 * HomePage container, used to define the composition of the HomePage screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const HomePage = (props) => {
  const content = getHomePageContentElement(props)
  return (
    <div>
      HOMEPAGE
      {content}
      <WorkInProgress />
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
  return isUserLoggedIn(props) ? (<HomePageLoggedIn lang={lang} />) : (<HomePageLoggedOff lang={lang} />)
}

/**
 * Check if the user is logged in
 * @param  {Object}  props The container props
 * @return {Boolean}       True if the user is logged in, else false
 */
function isUserLoggedIn (props) {
  return AuthService.isConnected(props)
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    auth: state.application.auth,
    currentLang: state.i18n.locale
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {}
}

/**
 * The container properties' types
 * @type {Object}
 */
HomePage.propTypes = {
  auth: PropTypes.object.isRequired,
  currentLang: PropTypes.string
}

HomePage.mapStateToProps = mapStateToProps
HomePage.mapDispatchToProps = mapDispatchToProps

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
