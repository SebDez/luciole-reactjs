import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

/**
 * NotFoundPage Component
 */
class NotFoundPage extends React.Component {

  /**
   * Create a new NotFoundPage component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor(props, context) {
    super(props, context);
    /**@type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render() {
    return (
      <div>
        <h4>
          404 Page Not Found
        </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
NotFoundPage.propTypes = {};

/**
 * Export the component
 */
export default NotFoundPage;
