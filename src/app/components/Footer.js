import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Grid, Row, Col } from 'react-bootstrap';
import GameTitle from './../components/GameTitle';

/**
 * Footer Component
 */
class Footer extends React.Component {

  /**
   * Create a new Footer component
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
      <div className="footer">
        <Grid>
         <Row className="show-grid">
           <Col xs={4}><GameTitle/></Col>
           <Col xs={4}><p>©2016 Sébastien Dez</p></Col>
           <Col xs={4}>b</Col>
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
Footer.propTypes = {};

/**
 * Export the component
 */
export default Footer;
