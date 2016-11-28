import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AuthActions from './../../../common/auth/action/auth.action'
import {Button} from 'react-bootstrap'

/**
 * SidebarLoggedOff Component
 */
export class SidebarLoggedOff extends React.Component {

  /**
   * Create a new SidebarLoggedOff component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    /** @type {Function}*/
    this.logUserIn = this.logUserIn.bind(this)
  }

  /**
 * Log an user in
 */
  logUserIn () {
    this.props.authActions.logUserIn()
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
        SidebarLoggedOff
        <br />
        Content when user is logged off
        <br />
        ----
        <Button bsStyle='success' onClick={this.logUserIn}> LOG IN</Button>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedOff.propTypes = {
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

SidebarLoggedOff.mapStateToProps = mapStateToProps
SidebarLoggedOff.mapDispatchToProps = mapDispatchToProps

/**
 * Export the component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarLoggedOff)
