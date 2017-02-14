import FormHelper from './form-helper'
import {shallow} from 'enzyme'
import FontAwesome from 'react-fontawesome'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('FormHelper', () => {
  let service

  beforeEach(() => {
    const i18n = {
      t: a => a
    }
    service = new FormHelper()
    service.i18n = i18n
  })

  describe('isRequired', () => {
    it('Expect to return undefined if value is set', () => {
      const expected = void (0)
      expect(service.isRequired('my-value')).to.equals(expected)
    })
    it('Expect to return forms.required if value is null', () => {
      const expected = 'forms.required'
      expect(service.isRequired(null)).to.equals(expected)
    })
  })

  describe('isMoreThanMaxLength', () => {
    it('Expect to return undefined if value is under max', () => {
      const expected = void (0)
      expect(service.isMoreThanMaxLength(10)('sss')).to.equals(expected)
    })
    it('Expect to return undefined if value is is not set', () => {
      const expected = void (0)
      expect(service.isMoreThanMaxLength(10)(null)).to.equals(expected)
    })
    it('Expect to return forms.maxLength if value is over max', () => {
      const expected = 'forms.maxLength'
      expect(service.isMoreThanMaxLength(3)('ssss')).to.equals(expected)
    })
  })

  describe('isLessThanMinLength', () => {
    it('Expect to return undefined if value is over min', () => {
      const expected = void (0)
      expect(service.isLessThanMinLength(2)('sss')).to.equals(expected)
    })
    it('Expect to return undefined if value is is not set', () => {
      const expected = void (0)
      expect(service.isLessThanMinLength(10)(null)).to.equals(expected)
    })
    it('Expect to return forms.minLength if value is under min', () => {
      const expected = 'forms.minLength'
      expect(service.isLessThanMinLength(3)('ss')).to.equals(expected)
    })
  })

  describe('isNumber', () => {
    it('Expect to return undefined if value is number', () => {
      const expected = void (0)
      expect(service.isNumber(4)).to.equals(expected)
    })
    it('Expect to return undefined if value is is not set', () => {
      const expected = void (0)
      expect(service.isNumber(null)).to.equals(expected)
    })
    it('Expect to return forms.numberRequired if value is not a number', () => {
      const expected = 'forms.numberRequired'
      expect(service.isNumber('sss')).to.equals(expected)
    })
  })

  describe('isValidEmail', () => {
    it('Expect to return undefined if value is an email', () => {
      const expected = void (0)
      expect(service.isValidEmail('s@d.fr')).to.equals(expected)
    })
    it('Expect to return undefined if value is is not set', () => {
      const expected = void (0)
      expect(service.isValidEmail(null)).to.equals(expected)
    })
    it('Expect to return forms.emailInvalid if value is not a valid email', () => {
      const expected = 'forms.emailInvalid'
      expect(service.isValidEmail('sss@xd')).to.equals(expected)
    })
  })

  describe('adviceDemo', () => {
    it('Expect to return undefined if string does not contain train', () => {
      const expected = void (0)
      expect(service.adviceDemo('sss')).to.equals(expected)
    })
    it('Expect to return undefined if value is is not set', () => {
      const expected = void (0)
      expect(service.adviceDemo(null)).to.equals(expected)
    })
    it('Expect to return forms.mock if string contains train', () => {
      const expected = 'forms.mock'
      expect(service.adviceDemo('train')).to.equals(expected)
    })
  })

  describe('getFieldClass', () => {
    it('Expect to return field-error if touched and error', () => {
      const expected = 'field-error'
      expect(service.getFieldClass(true, true)).to.equals(expected)
    })
    it('Expect to return false if not touched', () => {
      const expected = false
      expect(service.getFieldClass(false, true)).to.equals(expected)
    })
    it('Expect to return false if not error', () => {
      const expected = false
      expect(service.getFieldClass(true, false)).to.equals(expected)
    })
  })

  describe('getFieldLabelProp', () => {
    it('Expect to return a valid class if warning type', () => {
      const expected = 'field-warning-label'
      expect(service.getFieldLabelProp('warning').class).to.equals(expected)
    })
    it('Expect to return a valid icon if warning type', () => {
      const expected = 'exclamation-triangle'
      expect(service.getFieldLabelProp('warning').icon).to.equals(expected)
    })
    it('Expect to return a valid class if error type', () => {
      const expected = 'field-error-label'
      expect(service.getFieldLabelProp('error').class).to.equals(expected)
    })
    it('Expect to return a valid icon if error type', () => {
      const expected = 'exclamation-circle'
      expect(service.getFieldLabelProp('error').icon).to.equals(expected)
    })
    it('Expect to return undefined if other type', () => {
      const expected = void (0)
      expect(service.getFieldLabelProp('otherxxxxxx')).to.equals(expected)
    })
  })

  describe('getInputElement', () => {
    const input = 'input'
    const label = 'label'
    const touched = true
    const error = true
    it('Expect to return input if type is text', () => {
      const wrapper = shallow(service.getInputElement(input, label, 'text', touched, error))
      expect(wrapper.find('input')).to.be.length(1)
    })
    it('Expect to return input if type is email', () => {
      const wrapper = shallow(service.getInputElement(input, label, 'email', touched, error))
      expect(wrapper.find('input')).to.be.length(1)
    })
    it('Expect to return textarea if type is textarea', () => {
      const wrapper = shallow(service.getInputElement(input, label, 'textarea', touched, error))
      expect(wrapper.find('textarea')).to.be.length(1)
    })
    it('Expect to have call getFieldClass once', () => {
      const spy = chai.spy.on(service, 'getFieldClass')
      service.getInputElement(input, label, 'textarea', touched, error)
      expect(spy).to.have.been.called.once()
    })
    it('Expect to return undefined if other type', () => {
      const expected = void (0)
      expect(service.getInputElement(input, label, 'otherxxxxxx', touched, error)).to.equals(expected)
    })
  })

  describe('renderField', () => {
    const params = {
      input: 'input',
      label: 'label',
      meta: {
        touched: true,
        error: true,
        warning: true
      }
    }
    it('Expect to get a label', () => {
      const wrapper = shallow(service.renderField(params))
      expect(wrapper.find('label')).to.be.length(1)
    })
    it('Expect to have call getInputElement once', () => {
      const spy = chai.spy.on(service, 'getInputElement')
      service.renderField(params)
      expect(spy).to.have.been.called.once()
    })
    it('Expect to have call renderInfoField with good params if has error', () => {
      const spy = chai.spy.on(service, 'renderInfoField')
      service.renderField(params)
      expect(spy).to.have.been.called.with('error', true)
    })
    it('Expect to have call renderInfoField with good params if has warning', () => {
      const spy = chai.spy.on(service, 'renderInfoField')
      params.meta.error = false
      service.renderField(params)
      expect(spy).to.have.been.called.with('warning', true)
    })
  })

  describe('renderInfoField', () => {
    it('Expect to have call getFieldLabelProp with good params', () => {
      const spy = chai.spy.on(service, 'getFieldLabelProp')
      service.renderInfoField('error')
      expect(spy).to.have.been.called.with('error')
    })
    it('Expect to return FontAwesome if type is textarea', () => {
      const wrapper = shallow(service.renderInfoField('error'))
      expect(wrapper.find(FontAwesome)).to.be.length(1)
    })
    it('Expect to return span if type is textarea', () => {
      const wrapper = shallow(service.renderInfoField('error'))
      expect(wrapper.find('span')).to.be.length(1)
    })
  })
})
