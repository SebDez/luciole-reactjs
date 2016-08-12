import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { I18n } from 'react-redux-i18n';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import GameTitle from './../../components/GameTitle';
import LoginModal from './../../components/modals/LoginModal';

import * as authActions from '../../actions/AuthActions';

import AuthService from './../../services/AuthService';

/**
 * Auth Component
 */
class Auth extends React.Component {

  /**
   * Create a new Auth component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor(props, context) {
    super(props, context);
    /**@type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.openLoginView = this.openLoginView.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  openLoginView(){
    this.props.authActions.openLoginModal();
    //this.props.logUser('login', 'password');
  }

  disconnect(){
    this.props.disconnectUser(this.context.router);
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render() {
    let loginElement;
    if(!AuthService.isConnected(this.props.auth)){
      loginElement = (<input id="login" type="submit" value={I18n.t('application.header.login')} onClick={this.openLoginView}/>);
    }else{
      loginElement = (<input id="disconnect" type="submit" value={I18n.t('application.header.logout')} onClick={this.disconnect}/>);
    }

    return (
      <div className="login">
          {loginElement}
          <LoginModal/>
      </div>
    );
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
Auth.propTypes = {
  auth : PropTypes.object.isRequired,
  authActions : PropTypes.object.isRequired
};

Auth.contextTypes = {
  router: PropTypes.object,
};

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps(state) {
  return {
    auth : state.application.auth
  };
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

/**
 * Export the component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
