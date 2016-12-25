import React from 'react'
import {shallow} from 'enzyme'
import MainPageSidebarBurger from './main-sidebar-burger.component'
import FontAwesome from 'react-fontawesome'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let expect = chai.expect

describe('MainPageSidebarBurger', () => {
  describe('render', () => {
    const props = {
      onClick: () => 0
    }

    it('Expect to contain a div with valid className', () => {
      const wrapper = shallow(<MainPageSidebarBurger {...props} />)
      const actual = wrapper.findWhere(n => {
        return n.type() === 'div' && n.prop('className') === 'hand-over burger-menu'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain FontAwesome with good prop className', () => {
      const wrapper = shallow(<MainPageSidebarBurger {...props} />)
      const actual = wrapper.find(FontAwesome).props().className
      const expected = 'sidebar-burger'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain FontAwesome with good prop name', () => {
      const wrapper = shallow(<MainPageSidebarBurger {...props} />)
      const actual = wrapper.find(FontAwesome).props().name
      const expected = 'bars'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain inner img with valid src', () => {
      const wrapper = shallow(<MainPageSidebarBurger {...props} />)
      const src = './../../../../assets/img/luciole_mini_logo.png'
      const actual = wrapper.findWhere(n => {
        return n.type() === 'img' && n.prop('src') === src
      })
      expect(actual).to.have.length(1)
    })
  })

  describe('handleBurgerClick', () => {
    let props, compo, spy

    beforeEach(() => {
      props = {
        onClick: () => 0
      }
      compo = new MainPageSidebarBurger(props)
    })

    it('Expect to have call props onclick cb', () => {
      spy = chai.spy.on(compo.props, 'onClick')
      compo.handleBurgerClick()
      expect(spy).to.have.been.called.once()
    })
  })
})
