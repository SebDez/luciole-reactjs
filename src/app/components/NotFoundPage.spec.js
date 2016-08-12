import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import NotFoundPage from './NotFoundPage';
import { Link } from 'react-router';


describe('NotFoundPage', () => {

  describe('Render', () => {

    it('Should contain <h4>', () => {
      const wrapper = shallow(<NotFoundPage/>);
      expect(wrapper.find('h4')).to.be.length(1);
    });

    it('Should contain <Link>', () => {
      const wrapper = shallow(<NotFoundPage/>);
      expect(wrapper.find(Link)).to.be.length(1);
    });

  });

});
