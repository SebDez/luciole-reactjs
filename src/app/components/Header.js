import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Grid, Row, Col} from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

import GameTitle from './../components/GameTitle';

import AuthService from './../services/AuthService';

/**
 * Header Component
 */
class Header extends React.Component {

  /**
   * Create a new Header component
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
    this.props.logUser('login', 'password');
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
    if(!AuthService.isConnected(this.props)){
      loginElement = (<input id="login" type="submit" value={I18n.t('application.header.login')} onClick={this.openLoginView}/>);
    }else{
      loginElement = (<input id="disconnect" type="submit" value={I18n.t('application.header.logout')} onClick={this.disconnect}/>);
    }

    return (
      <div className="header">
          <Grid>
           <Row className="show-grid">
             <Col xs={10}><GameTitle/></Col>
             <Col xs={2}>{loginElement}</Col>
           </Row>
         </Grid>
      </div>
    );
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
Header.propTypes = {
  logUser : PropTypes.func.isRequired,
  disconnectUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired
};

Header.contextTypes = {
  router: PropTypes.object,
};

/**
 * Export the component
 */
export default Header;
