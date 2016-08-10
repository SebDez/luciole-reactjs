import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {KingdomDashboard} from './KingdomDashboard';
import Navbar from './../components/Navbar';

describe('KingdomDashboard', () => {

  const actions = {};

  describe('Render', () => {
    it('Should contain a message', () => {
      const wrapper = shallow(<KingdomDashboard actions={actions}/>);
      expect(wrapper.contains('This is the kingdom dashboard')).to.equal(true);
    });

    it('should contain <Navbar />', () => {
      const wrapper = shallow(<KingdomDashboard actions={actions}/>);
      expect(wrapper.find(Navbar)).to.be.length(1);
    });
  });

  describe('mapStateToProps', () => {
    it('Should return empty object', () => {
      expect(KingdomDashboard.mapStateToProps()).to.be.empty;
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should return empty object', () => {
      expect(KingdomDashboard.mapDispatchToProps().actions).to.be.empty;
    });
  });

});
