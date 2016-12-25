import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { HomePage } from './homepage-container'
import HomePageLoggedIn from './../component/homepage-logged-in-component'
import HomePageLoggedOff from './../component/homepage-logged-off-component'
import WorkInProgress from './../../../common/component/wip/wip-component'

describe('HomePage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(HomePage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return a valid object', () => {
      const state = {
        application: {
          auth: 'my auth obj'
        }
      }
      expect(HomePage.mapStateToProps(state).auth).to.equal('my auth obj')
    })
  })

  describe('render', () => {
    const auth = {
      user: {
        token: 'mytoken'
      }
    }
    it('Expect to contain a WorkInProgress ', () => {
      const wrapper = shallow(<HomePage auth={auth} />)
      expect(wrapper.find(WorkInProgress)).to.be.length(1)
    })
    it('Expect to contain a HomePageLoggedIn if user logged in', () => {
      const wrapper = shallow(<HomePage auth={auth} />)
      expect(wrapper.find(HomePageLoggedIn)).to.be.length(1)
    })
    it('Expect to contain a HomePageLoggedOff if user not logged in', () => {
      const fakeAuth = {}
      const wrapper = shallow(<HomePage auth={fakeAuth} />)
      expect(wrapper.find(HomePageLoggedOff)).to.be.length(1)
    })
  })
})
