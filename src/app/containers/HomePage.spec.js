import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {HomePage} from './HomePage';
import Navbar from './../components/Navbar';

describe('HomePage', () => {

  describe('Render', () => {
    it('Should contain a message', () => {
      const actions = {};
      const wrapper = shallow(<HomePage actions={actions} auth={{}}/>);
      expect(wrapper.contains(<div>
      This is my home page
      </div>)).to.equal(true);
    });

    it('Should contain a navbar if logged', () => {
      const props = {
        actions:{},
        auth:{user:{token:'ok'}}
      };
      const wrapper = shallow(<HomePage {...props}/>);
      expect(wrapper.contains(<Navbar/>)).to.equal(true);
    });

    it('Should not contain a navbar if not logged', () => {
      const props = {
        actions:{},
        auth:{user:{token:null}}
      };
      const wrapper = shallow(<HomePage {...props}/>);
      expect(wrapper.find(Navbar)).to.be.length(0);
    });
  });

  describe('mapStateToProps', () => {
    it('Should return empty object', () => {
      const state = {auth:{user:'user1'}}
      expect(HomePage.mapStateToProps(state).auth.user).to.equal('user1');
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should return empty object', () => {
      expect(HomePage.mapDispatchToProps().actions).to.be.empty;
    });
  });

});
