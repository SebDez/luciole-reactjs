import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { AboutPage } from './about-container'
import WorkInProgress from './../../../common/component/wip/wip-component'

describe('AboutPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(AboutPage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return empty object', () => {
      expect(AboutPage.mapStateToProps()).to.be.empty
    })
  })

  describe('render', () => {
    const wrapper = shallow(<AboutPage />)
    it('Expect to contain a WorkInProgress ', () => {
      expect(wrapper.find(WorkInProgress)).to.be.length(1)
    })
  })
})
