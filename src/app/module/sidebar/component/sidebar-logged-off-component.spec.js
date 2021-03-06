import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import SidebarLoggedOff from './sidebar-logged-off-component'

describe('SidebarLoggedOff', () => {
  describe('render', () => {
    const props = {
      logUserIn: () => 0,
      openLoginModal: () => 0,
      lang: 'fr',
      showLoginModal: false,
      handleCloseModal: () => 0,
      handleLogin: () => 0,
      openSignUpModal: () => 0,
      showSignUpModal: false,
      handleCloseSignUpModal: () => 0,
      handleSignUp: () => 0
    }

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
