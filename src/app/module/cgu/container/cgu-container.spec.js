import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { CGUPage } from './cgu-container'
import WorkInProgress from './../../../common/component/wip/wip-component'

describe('CGUPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(CGUPage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return empty object', () => {
      expect(CGUPage.mapStateToProps()).to.be.empty
    })
  })

  describe('render', () => {
    const wrapper = shallow(<CGUPage />)
    it('Expect to contain a WorkInProgress ', () => {
      expect(wrapper.find(WorkInProgress)).to.be.length(1)
    })
  })
})
