import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import SidebarLoggedOff from './sidebar-logged-off.component'

describe('SidebarLoggedOff', () => {
  describe('render', () => {
    const props = {}

    it('Expect to contain a div with valid className sidebar-content off', () => {
      const wrapper = shallow(<SidebarLoggedOff {...props} />)
      const actual = wrapper.findWhere(n => {
        return n.type() === 'div' && n.prop('className') === 'sidebar-content off'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a div with valid className sidebar-button', () => {
      const wrapper = shallow(<SidebarLoggedOff {...props} />)
      const actual = wrapper.findWhere(n => {
        return n.type() === 'div' && n.prop('className') === 'sidebar-button'
      })
      expect(actual).to.have.length(1)
    })
  })
})
