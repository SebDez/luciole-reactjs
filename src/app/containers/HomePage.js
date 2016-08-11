import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/HomePageActions';
import Navbar from './../components/Navbar';

/**
 * HomePage container, used to define the composition of the Home Page
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const HomePage = (props) => {
  return (
    <div>
      <Navbar/>
    This is my home page
    </div>
  );
};

/**
 * The container properties' types
 * @type {Object}
 */
HomePage.propTypes = {
  actions: PropTypes.object.isRequired
};

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps(state) {
  return {};
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

HomePage.mapStateToProps=mapStateToProps;
HomePage.mapDispatchToProps=mapDispatchToProps;

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
