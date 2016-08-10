import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {App} from './App';
import Footer from './Footer';
import Header from './Header';

describe('App', () => {

  const props = {
    actions:{},
    authActions:{logUser:()=>{return 0;}},
    user:{token:'token'}
  };

  describe('Render', () => {
    it('Should have appContainer class', () => {
      const wrapper = shallow(<App {...props}/>);
      expect(wrapper.find('.appContainer')).to.have.length(1);
    });

    it('should contain <Footer />', () => {
      const wrapper = shallow(<App {...props}/>);
      expect(wrapper.find(Footer)).to.be.length(1);
    });

    it('should contain <Header />', () => {
      const wrapper = shallow(<App {...props}/>);
      expect(wrapper.find(Header)).to.be.length(1);
    });
  });

  describe('mapStateToProps', () => {
    it('Should return object with user', () => {
      const state = {auth:{user:'user1'}}
      expect(App.mapStateToProps(state).user).to.equal('user1');
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should return empty object', () => {
      expect(App.mapDispatchToProps().actions).to.be.empty;
    });
  });

});
