import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import SidebarLoggedIn from './sidebar-logged-in-component'
import SidebarLink from './sidebar-link-component'
import SidebarBlockResources from './sidebar-block-resources-component'
import {Link} from 'react-router'

describe('SidebarLoggedIn', () => {
  describe('render', () => {
    const props = {
      disconnectUser: () => 0,
      userResource: {gold: 1},
      reloadResources: () => 2
    }

    it('Expect to contain 5 SidebarLink with link to root', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarLink).findWhere(n => {
        return n.prop('link') === '/'
      })
      expect(actual).to.have.length(5)
    })

    it('Expect to contain 1 SidebarLink with link to buildings', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarLink).findWhere(n => {
        return n.prop('link') === '/buildings'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 SidebarLink with link to contact', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarLink).findWhere(n => {
        return n.prop('link') === '/contact'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 SidebarLink with link to userpage', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarLink).findWhere(n => {
        return n.prop('link') === '/user'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 SidebarLink with link to kingdompage', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarLink).findWhere(n => {
        return n.prop('link') === '/kingdom'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 SidebarBlockResources', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarBlockResources)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 SidebarBlockResources', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.findWhere(n => {
        return n.prop('className') === 'sidebar-block-reload'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Link with valid props', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(Link).findWhere(n => {
        return n.prop('to') === '/kingdom' && n.prop('className') === 'sidebar-button-light'
      })
      expect(actual).to.have.length(1)
    })
  })
})
