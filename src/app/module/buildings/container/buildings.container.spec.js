import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { BuildingsPage } from './buildings.container'
import WorkInProgress from './../../../common/component/wip/wip.component'

describe('BuildingsPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(BuildingsPage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return empty object', () => {
      expect(BuildingsPage.mapStateToProps()).to.be.empty
    })
  })

  describe('render', () => {
    const wrapper = shallow(<BuildingsPage />)
    it('Expect to contain a WorkInProgress ', () => {
      expect(wrapper.find(WorkInProgress)).to.be.length(1)
    })
  })
})
