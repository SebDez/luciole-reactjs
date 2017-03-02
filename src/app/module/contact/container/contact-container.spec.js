import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { ContactPage } from './contact-container'
import ContactForm from './../component/contact-form-component'

describe('ContactPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(ContactPage.mapDispatchToProps().contactActions).to.not.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return empty object', () => {
      expect(ContactPage.mapStateToProps()).to.be.empty
    })
  })

  describe('render', () => {
    const props = {
      contactActions: {
        sendContactMessage: () => 0
      }
    }
    const wrapper = shallow(<ContactPage {...props} />)
    it('Expect to contain a ContactPage ', () => {
      expect(wrapper.find(ContactForm)).to.be.length(1)
    })
  })
})
