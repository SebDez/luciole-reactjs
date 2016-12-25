import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { Sidebar } from './sidebar-container'
import SidebarLoggedIn from './../component/sidebar-logged-in-component'
import SidebarLoggedOff from './../component/sidebar-logged-off-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('Sidebar', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return valid SidebarActions object', () => {
      expect(Sidebar.mapDispatchToProps().sidebarActions).to.not.be.empty
    })
    it('Expect to return valid authActions object', () => {
      expect(Sidebar.mapDispatchToProps().authActions).to.not.be.empty
    })
  })

  describe('mapStateToProps', () => {
    const state = {
      application: {
        auth: 'my auth obj',
        module: {
          sidebar: {
            userResource: 'userResource-my'
          }
        }
      }
    }
    it('Expect to return a valid auth prop', () => {
      expect(Sidebar.mapStateToProps(state).auth).to.equal('my auth obj')
    })
    it('Expect to return a valid userResource prop', () => {
      expect(Sidebar.mapStateToProps(state).userResource).to.equal('userResource-my')
    })
  })

  describe('render', () => {
    const auth = {
      user: {
        token: 'mytoken'
      }
    }
    let userResource = {
      name: 'name'
    }
    it('Expect to contain a SidebarLoggedIn if user logged in', () => {
      const wrapper = shallow(<Sidebar auth={auth} userResource={userResource} sidebarActions={{}} authActions={{}} />)
      expect(wrapper.find(SidebarLoggedIn)).to.be.length(1)
    })
    it('Expect to contain a SidebarLoggedOff if user not logged in', () => {
      const noAuth = {}
      const wrapper = shallow(<Sidebar auth={noAuth} userResource={userResource} sidebarActions={{}} authActions={{}} />)
      expect(wrapper.find(SidebarLoggedOff)).to.be.length(1)
    })
    it('Expect to have call sidebarActions.getUserResources if user data not loaded', () => {
      const sidebarActions = {
        getUserResources: () => 0
      }
      let spy = chai.spy.on(sidebarActions, 'getUserResources')
      const NoUserResource = null
      shallow(<Sidebar auth={auth} userResource={NoUserResource} authActions={{}} sidebarActions={sidebarActions} />)
      expect(spy).to.have.been.called()
    })
  })

  describe('logUserIn', () => {
    it('Expect to have call authActions.logUserIn', () => {
      const authActions = {
        logUserIn: () => 0
      }
      let spy = chai.spy.on(authActions, 'logUserIn')
      const props = {
        authActions
      }
      Sidebar.__testOnly.logUserIn(props)
      expect(spy).to.have.been.called.with('login', 'password')
    })
  })

  describe('disconnectUser', () => {
    it('Expect to have call authActions.disconnectUser', () => {
      const authActions = {
        disconnectUser: () => 0
      }
      let spy = chai.spy.on(authActions, 'disconnectUser')
      const props = {
        authActions
      }
      Sidebar.__testOnly.disconnectUser(props)
      expect(spy).to.have.been.called()
    })
  })
})
