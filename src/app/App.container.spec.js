import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { App } from './app.container'
import ReactSidebar from 'react-sidebar'
import Sidebar from './module/sidebar/container/sidebar.container'

describe('App', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(App.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return a valid object', () => {
      const state = {
        application: {
          module: {
            sidebar: 'my value'
          }
        }
      }
      expect(App.mapStateToProps(state).sidebar).to.equal('my value')
    })
  })

  describe('render', () => {
    const sidebar = {
      open: true
    }
    const wrapper = shallow(<App sidebar={sidebar} children='children' />)
    const props = wrapper.find(ReactSidebar).props()

    it('Expect to contain a ReactSidebar', () => {
      expect(wrapper.find(ReactSidebar)).to.be.length(1)
    })
    it('Expect to contain a ReactSidebar with good open prop', () => {
      expect(props.open).to.equal(true)
    })
    it('Expect to contain a ReactSidebar with good docked prop', () => {
      expect(props.docked).to.equal(true)
    })
    it('Expect to contain a ReactSidebar with good shadow prop', () => {
      expect(props.shadow).to.equal(false)
    })
  })
})
