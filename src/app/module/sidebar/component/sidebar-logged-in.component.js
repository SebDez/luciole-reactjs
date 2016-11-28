import React, { PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AuthActions from './../../../common/auth/action/auth.action'
import {Button} from 'react-bootstrap'

/**
 * SidebarLoggedIn Component
 */
class SidebarLoggedIn extends React.Component {

  /**
   * Create a new SidebarLoggedIn component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    /** @type {Function}*/
    this.disconnectUser = this.disconnectUser.bind(this)
  }

  /**
 * Disconnect the user
 */
  disconnectUser () {
    this.props.authActions.disconnectUser()
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        ----
        <br />
        SidebarLoggedIn
        <br />
        Content when user is logged in
        <br />
        ----
        <Button bsStyle='warning' onClick={this.disconnectUser}> DISCONNECT</Button>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedIn.propTypes = {
  authActions: PropTypes.object.isRequired
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {}
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {
    authActions: bindActionCreators(new AuthActions(), dispatch)
  }
}

SidebarLoggedIn.mapStateToProps = mapStateToProps
SidebarLoggedIn.mapDispatchToProps = mapDispatchToProps

/**
 * Export the component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarLoggedIn)
