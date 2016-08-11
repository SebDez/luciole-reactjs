import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import spies  from 'chai-spies';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Header from './Header';
import GameTitle from './GameTitle';
import { Grid, Row, Col } from 'react-bootstrap';

chai.use(sinonChai);
chai.use(spies);

describe('Header', () => {

  let props;

  beforeEach(()=>{
    props ={
      logUser : ()=>{ return 0; },
      disconnectUser : ()=>{ return 0; },
      auth:{}
    }
  })

  describe('Render', () => {

    it('Should contain <Grid>', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find(Grid)).to.be.length(1);
    });

    it('Should contain <GameTitle>', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find(GameTitle)).to.be.length(1);
    });

    it('Should contain <Row>', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find(Row)).to.be.length(1);
    });

    it('Should contain <Col>', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find(Col)).to.be.length(2);
    });

    it('Should have header class', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find('.header')).to.have.length(1);
    });

    it('Should have show-grid class', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find('.show-grid')).to.have.length(1);
    });

    it('Should have only one input field', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find('input')).to.have.length(1);
    });

    it('Should have login input if user not logged', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find('input#login')).to.have.length(1);
    });

    it('Should have disconnect input if user not logged', () => {
      props.auth={ user :{token : 'ok'}}
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find('input#disconnect')).to.have.length(1);
    });
  });

  describe('openLoginView', () => {

    it('Should call props logUser', () => {
      let hdr = new Header(props)
      let spy = chai.spy.on(hdr.props, 'logUser')
      hdr.openLoginView()
      expect(spy).to.have.been.called();
    });

  });

});
