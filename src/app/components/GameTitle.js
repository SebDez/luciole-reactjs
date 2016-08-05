import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

/**
 * GameTitle Component
 */
class GameTitle extends React.Component {

  /**
   * Create a new GameTitle component
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
        <p className="gameTitle">Luciole</p>
      </div>
    );
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
GameTitle.propTypes = {};

/**
 * Export the component
 */
export default GameTitle;
