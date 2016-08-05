import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Grid, Row, Col } from 'react-bootstrap';
import {Link, IndexLink} from 'react-router';
import { Translate, Localize } from 'react-redux-i18n';

/**
 * Navbar Component
 */
class Navbar extends React.Component {

  /**
   * Create a new Navbar component
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
      <div className="navbar">
        <Grid>
         <Row className="show-grid">
           <Col xs={4}><IndexLink to="/"><Translate value="application.homePage.linkTo"/></IndexLink></Col>
           <Col xs={4}><Link to="/dashboard"><Translate value="application.kingdomPage.linkTo"/></Link></Col>
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
Navbar.propTypes = {};

/**
 * Export the component
 */
export default Navbar;
