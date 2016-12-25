import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import SidebarLogo from './sidebar-logo-component'
import {IndexLink} from 'react-router'

describe('SidebarLogo', () => {
  describe('render', () => {
    const props = {}

    it('Expect to contain a div with valid className', () => {
      const wrapper = shallow(<SidebarLogo {...props} />)
      const actual = wrapper.find('div').prop('className')
      const expected = 'sidebar-logo'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain IndexLink with good prop to', () => {
      const wrapper = shallow(<SidebarLogo {...props} />)
      const actual = wrapper.find(IndexLink).props().to
      const expected = '/'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain an img with valid src', () => {
      const wrapper = shallow(<SidebarLogo {...props} />)
      const actual = wrapper.find('img').prop('src')
      const expected = '../assets/img/luciole_logo.png'
      expect(actual).to.be.equal(expected)
    })
  })
})
