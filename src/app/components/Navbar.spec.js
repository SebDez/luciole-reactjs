import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Navbar from './Navbar';
import { Grid, Row, Col } from 'react-bootstrap';

chai.use(sinonChai);

describe('Navbar', () => {

  describe('Render', () => {

    it('Should contain <Grid>', () => {
      const wrapper = shallow(<Navbar/>);
      expect(wrapper.find(Grid)).to.be.length(1);
    });

    it('Should contain <Row>', () => {
      const wrapper = shallow(<Navbar/>);
      expect(wrapper.find(Row)).to.be.length(1);
    });

    it('Should contain <Col>', () => {
      const wrapper = shallow(<Navbar/>);
      expect(wrapper.find(Col)).to.be.length(2);
    });

    it('Should have footer class', () => {
      const wrapper = shallow(<Navbar/>);
      expect(wrapper.find('.navbar')).to.have.length(1);
    });

    it('Should have show-grid class', () => {
      const wrapper = shallow(<Navbar/>);
      expect(wrapper.find('.show-grid')).to.have.length(1);
    });

  });

});
