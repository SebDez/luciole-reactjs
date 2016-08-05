import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/HomePageActions';
import Header from './../components/Header';
import Footer from './../components/Footer';

/**
 * App container, used to define the whole app
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const App = (props) => {
    return (
    <div className="appContainer">
      <Header/>
      Mon token : {props.user.token}
      {props.children}
      <Footer/>
    </div>);
};

/**
 * The container properties' types
 * @type {Object}
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  user:PropTypes.object.isRequired
};

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps(state) {
  return {
    user : state.app.user
  };
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
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
)(App);
