import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import SidebarLoggedIn from './sidebar-logged-in-component'
import SidebarLink from './sidebar-link-component'
import SidebarBlockResources from './sidebar-block-resources-component'

describe('SidebarLoggedIn', () => {
  describe('render', () => {
    const props = {
      disconnectUser: () => 0,
      userResource: {gold: 1},
      reloadResources: () => 2
    }

    it('Expect to contain 9 SidebarLink with link to root', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarLink).findWhere(n => {
        return n.prop('link') === '/'
      })
      expect(actual).to.have.length(8)
    })

    it('Expect to contain 1 SidebarLink with link to buildings', () => {
      const wrapper = shallow(<SidebarLoggedIn {...props} />)
      const actual = wrapper.find(SidebarLink).findWhere(n => {
        return n.prop('link') === '/buildings'
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
  })
})
