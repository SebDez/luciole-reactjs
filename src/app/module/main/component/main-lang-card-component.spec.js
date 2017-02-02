import React from 'react'
import {shallow} from 'enzyme'
import MainLangCard from './main-lang-card-component'
import LuDropDown from './../../../common/component/dropdown/dropdown-component'
import Constants from './../../../common/constants'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let expect = chai.expect

describe('MainLangCard', () => {
  describe('render', () => {
    const props = {
      onSelect: () => 0,
      onToggle: () => 0,
      isOpen: true,
      lang: 'fr'
    }

    const compo = new MainLangCard(props)

    it('Expect to contain LuDropDown with good prop open', () => {
      const wrapper = shallow(<MainLangCard {...props} />)
      const actual = wrapper.find(LuDropDown).props().open
      const expected = true
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LuDropDown with good prop choices', () => {
      const wrapper = shallow(<MainLangCard {...props} />)
      const actual = wrapper.find(LuDropDown).props().choices
      const expected = Constants.LANGUAGE
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LuDropDown with good prop currSelected', () => {
      const wrapper = shallow(<MainLangCard {...props} />)
      const actual = wrapper.find(LuDropDown).props().currSelected
      const expected = 'fr'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LuDropDown with good prop containerClass', () => {
      const wrapper = shallow(<MainLangCard {...props} />)
      const actual = wrapper.find(LuDropDown).props().containerClass
      const expected = 'hand-over main-lang-card'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LuDropDown with good prop listClass', () => {
      const wrapper = shallow(<MainLangCard {...props} />)
      const actual = wrapper.find(LuDropDown).props().listClass
      const expected = 'dpd-lang-list'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LuDropDown with good prop onToggle', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(LuDropDown).props().onToggle
      const expected = compo.handleClick
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LuDropDown with good prop onSelect', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(LuDropDown).props().onSelect
      const expected = compo.handleSelect
      expect(actual).to.be.equal(expected)
    })
  })

  describe('handleClick', () => {
    let props, compo, spy

    beforeEach(() => {
      props = {
        onSelect: () => 0,
        onToggle: () => 0,
        isOpen: false,
        lang: 'fr'
      }
      compo = new MainLangCard(props)
    })

    it('Expect to have call props onToggle cb with good params', () => {
      spy = chai.spy.on(compo.props, 'onToggle')
      compo.handleClick()
      expect(spy).to.have.been.called.with(false)
    })
  })

  describe('handleSelect', () => {
    let props, compo, spy

    beforeEach(() => {
      props = {
        onSelect: () => 0,
        onToggle: () => 0,
        isOpen: true,
        lang: 'fr'
      }
      compo = new MainLangCard(props)
      compo.routerActions = {
        push: () => 0
      }
    })

    it('Expect to have call props onSelect with good params', () => {
      spy = chai.spy.on(compo.props, 'onSelect')
      compo.handleSelect('mykey')
      expect(spy).to.have.been.called.with('mykey')
    })

    it('Expect to have call routerActions.push with good params', () => {
      spy = chai.spy.on(compo.routerActions, 'push')
      compo.handleSelect('mykey')
      expect(spy).to.have.been.called.with('/')
    })
  })

  describe('handleMouseLeave', () => {
    let props, compo, spy

    beforeEach(() => {
      props = {
        onSelect: () => 0,
        onToggle: () => 0,
        isOpen: false,
        lang: 'fr'
      }
      compo = new MainLangCard(props)
    })

    it('Expect to have call props onToggle cb with good params', () => {
      spy = chai.spy.on(compo.props, 'onToggle')
      compo.handleMouseLeave()
      expect(spy).to.have.been.called.with(true)
    })
  })
})
