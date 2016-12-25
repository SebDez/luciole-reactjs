import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { ContactPage } from './contact-container'
import WorkInProgress from './../../../common/component/wip/wip.component'

describe('ContactPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(ContactPage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return empty object', () => {
      expect(ContactPage.mapStateToProps()).to.be.empty
    })
  })

  describe('render', () => {
    const wrapper = shallow(<ContactPage />)
    it('Expect to contain a WorkInProgress ', () => {
      expect(wrapper.find(WorkInProgress)).to.be.length(1)
    })
  })
})
