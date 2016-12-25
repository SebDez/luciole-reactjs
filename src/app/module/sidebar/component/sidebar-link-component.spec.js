import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import SidebarLink from './sidebar-link-component'
import {Link} from 'react-router'
import FontAwesome from 'react-fontawesome'

describe('SidebarLink', () => {
  describe('render', () => {
    const onClick = () => 0
    const props = {
      text: 'text',
      icon: 'icon',
      link: 'link',
      onClick
    }

    it('Expect to contain a div with valid className', () => {
      const wrapper = shallow(<SidebarLink {...props} />)
      const actual = wrapper.find('div').prop('className')
      const expected = 'sidebar-link-text'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain a div with valid text', () => {
      const wrapper = shallow(<SidebarLink {...props} />)
      const actual = wrapper.find('div').text()
      const expected = 'text'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain FontAwesome with good prop name', () => {
      const wrapper = shallow(<SidebarLink {...props} />)
      const actual = wrapper.find(FontAwesome).props().name
      const expected = 'icon'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain FontAwesome with good className', () => {
      const wrapper = shallow(<SidebarLink {...props} />)
      const actual = wrapper.find(FontAwesome).prop('className')
      const expected = 'sidebar-link-icon'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain Link with good prop to', () => {
      const wrapper = shallow(<SidebarLink {...props} />)
      const actual = wrapper.find(Link).props().to
      const expected = 'link'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain Link with good className', () => {
      const wrapper = shallow(<SidebarLink {...props} />)
      const actual = wrapper.find(Link).prop('className')
      const expected = 'sidebar-link'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain Link with good onClick', () => {
      const wrapper = shallow(<SidebarLink {...props} />)
      const actual = wrapper.find(Link).prop('onClick')
      const expected = onClick
      expect(actual).to.be.equal(expected)
    })
  })
})
