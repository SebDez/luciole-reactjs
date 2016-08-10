import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import GameTitle from './GameTitle';
import { Grid, Row, Col } from 'react-bootstrap';

chai.use(sinonChai);

describe('GameTitle', () => {

  describe('Render', () => {

    it('Should have gameTitle class', () => {
      const wrapper = shallow(<GameTitle/>);
      expect(wrapper.find('.gameTitle')).to.have.length(1);
    });

    it('Should contain a message', () => {
      const wrapper = shallow(<GameTitle/>);
      expect(wrapper.contains(<p className="gameTitle">Luciole</p>)).to.equal(true);
    });

  });

});
