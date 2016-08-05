import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Grid, Row, Col} from 'react-bootstrap';
import GameTitle from './../components/GameTitle';

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
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render() {
    return (
      <div className="header">
          <Grid>
           <Row className="show-grid">
             <Col xs={10}><GameTitle/></Col>
             <Col xs={2}>right col</Col>
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
Header.propTypes = {};

/**
 * Export the component
 */
export default Header;
