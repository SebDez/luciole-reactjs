import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {HomePage} from './HomePage';

describe('HomePage', () => {

  describe('Render', () => {
    it('Should contain a message', () => {
      const actions = {};
      const wrapper = shallow(<HomePage actions={actions}/>);
      expect(wrapper.contains(<div>
      This is my home page
      </div>)).to.equal(true);
    });
  });

  describe('mapStateToProps', () => {
    it('Should return empty object', () => {
      expect(HomePage.mapStateToProps()).to.be.empty;
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should return empty object', () => {
      expect(HomePage.mapDispatchToProps().actions).to.be.empty;
    });
  });

});
