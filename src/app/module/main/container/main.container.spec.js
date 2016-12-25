import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { Main } from './main.container'
import MainPageSidebarBurger from './../component/main-sidebar-burger.component'
import MainPageUserCard from './../component/main-user-card.component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('Main', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return valid SidebarActions object', () => {
      expect(Main.mapDispatchToProps().sidebarActions).to.not.be.empty
    })
    it('Expect to return valid mainActions object', () => {
      expect(Main.mapDispatchToProps().mainActions).to.not.be.empty
    })
  })

  describe('mapStateToProps', () => {
    const state = {
      application: {
        auth: 'my auth obj',
        module: {
          sidebar: 'mysidebar',
          main: {
            user: 'myuser'
          }
        }
      }
    }
    it('Expect to return a valid auth prop', () => {
      expect(Main.mapStateToProps(state).auth).to.equal('my auth obj')
    })
    it('Expect to return a valid sidebar prop', () => {
      expect(Main.mapStateToProps(state).sidebar).to.equal('mysidebar')
    })
    it('Expect to return a valid user prop', () => {
      expect(Main.mapStateToProps(state).user).to.equal('myuser')
    })
  })

  describe('render', () => {
    const auth = {
      user: {
        token: 'mytoken'
      }
    }
    let user = {
      name: 'name'
    }
    it('Expect to contain a MainPageSidebarBurger if user logged in', () => {
      const wrapper = shallow(<Main auth={auth} user={user} sidebarActions={{}} mainActions={{}} sidebar={{}} />)
      expect(wrapper.find(MainPageSidebarBurger)).to.be.length(1)
    })
    it('Expect to contain a MainPageUserCard if user logged in', () => {
      const wrapper = shallow(<Main auth={auth} user={user} sidebarActions={{}} mainActions={{}} sidebar={{}} />)
      expect(wrapper.find(MainPageUserCard)).to.be.length(1)
    })
    it('Expect to have call mainActions.getUserInformations if user data not loaded', () => {
      const mainActions = {
        getUserInformations: () => 0
      }
      let spy = chai.spy.on(mainActions, 'getUserInformations')
      const noUser = null
      shallow(<Main auth={auth} user={noUser} sidebarActions={{}} mainActions={mainActions} sidebar={{}} />)
      expect(spy).to.have.been.called()
    })
  })

  describe('getSidebarBurgerElement', () => {
    it('Expect to return null if user not logged in', () => {
      const noAuth = {}
      expect(Main.__testOnly.getSidebarBurgerElement(noAuth)).to.equal(null)
    })
  })

  describe('handleBurgerClick', () => {
    it('Expect to have call sidebarActions.manageSidebar', () => {
      const sidebarActions = {
        manageSidebar: () => 0
      }
      let spy = chai.spy.on(sidebarActions, 'manageSidebar')
      const props = {
        sidebarActions,
        sidebar: {
          open: 'isopenornot'
        }
      }
      Main.__testOnly.handleBurgerClick(props)
      expect(spy).to.have.been.called.with('isopenornot')
    })
  })
})
