import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { ContactPage } from './contact-container'
import ContactForm from './../component/contact-form-component'

describe('ContactPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return valid props', () => {
      expect(ContactPage.mapDispatchToProps().contactActions).to.not.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return empty object', () => {
      const state = {
        application: {
          app: {
            conf: {
              default: {
                recaptcha: {
                  key: 'mykey'
                }
              }
            }
          }
        }
      }
      expect(ContactPage.mapStateToProps(state).recaptchaKey).to.equals('mykey')
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
