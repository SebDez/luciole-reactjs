import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from './../components/Header';
import Footer from './../components/Footer';

/**
 * App Component, contains every app's components
 */
export default class App extends React.Component {

  /**
   * Create a new App component
   * @param  {Object} props The component properties
   */
  constructor(props) {
    super(props);
    /**@type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

/**
 * Render the component
 * @return {Object} React component tree
 */
  render() {
    return (
    <div className="appContainer">
      <Header/>
      {this.props.children}
      <Footer/>
    </div>);
  }
}
