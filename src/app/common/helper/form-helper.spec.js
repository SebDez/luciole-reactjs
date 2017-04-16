import FormHelper from './form-helper'
import {shallow} from 'enzyme'
import FontAwesome from 'react-fontawesome'
import { FormGroup, ControlLabel, InputGroup, FormControl } from 'react-bootstrap'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('FormHelper', () => {
  let service, mockService

  beforeEach(() => {
    const i18n = {
      t: a => a
    }
    service = new FormHelper()
    service.i18n = i18n
    mockService = sinon.mock(service)
  })

  afterEach(() => {
    mockService.verify()
    mockService.restore()
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
    it('Expect to return field-not-touched if not touched', () => {
      const expected = 'field-not-touched'
      expect(service.getFieldClass(false, true)).to.equals(expected)
    })
    it('Expect to return field-success if not error', () => {
      const expected = 'field-success'
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

  describe('renderField', () => {
    let params = {}

    beforeEach(() => {
      params = {
        input: 'input',
        label: 'label',
        meta: {
          touched: true,
          error: true,
          warning: true
        },
        prefix: 'prefix',
        type: 'type'
      }
      mockService.expects('getValidationState').returns('success')
      mockService.expects('getFieldClass').returns('my_FieldClass')
      mockService.expects('getControlLabel').returns('my_ControlLabel')
      mockService.expects('getInputGroup').returns('my_InputGroup')
    })

    it('Expect to contain 1 FormGroup with name prop controlId', () => {
      params.input = {
        name: 'myname'
      }
      const wrapper = shallow(service.renderField(params))
      const actual = wrapper.find(FormGroup).findWhere(n => {
        return n.prop('controlId') === 'myname'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 FormGroup with name prop validationState', () => {
      const wrapper = shallow(service.renderField(params))
      const actual = wrapper.find(FormGroup).findWhere(n => {
        return n.prop('validationState') === 'success'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 FormControl.Feedback', () => {
      const wrapper = shallow(service.renderField(params))
      const actual = wrapper.find(FormControl.Feedback)
      expect(actual).to.have.length(1)
    })

    it('Expect to have call getValidationState once', () => {
      const spy = chai.spy.on(service, 'getValidationState')
      service.renderField(params)
      expect(spy).to.have.been.called.once()
    })
    it('Expect to have call getFieldClass once', () => {
      const spy = chai.spy.on(service, 'getFieldClass')
      service.renderField(params)
      expect(spy).to.have.been.called.once()
    })
    it('Expect to have call getControlLabel with good params', () => {
      const spy = chai.spy.on(service, 'getControlLabel')
      service.renderField(params)
      expect(spy).to.have.been.called.with('label')
    })
    it('Expect to have call getInputGroup with good params', () => {
      const spy = chai.spy.on(service, 'getInputGroup')
      service.renderField(params)
      expect(spy).to.have.been.called.with('type', 'input', 'label', 'prefix', 'my_FieldClass')
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

  describe('getValidationState', () => {
    let touched, error, warning

    it('Expect to return error if touched & error', () => {
      touched = true
      error = true
      warning = false
      const expected = 'error'
      expect(service.getValidationState(touched, error, warning)).to.equals(expected)
    })

    it('Expect to return warning if touched & warning', () => {
      touched = true
      error = false
      warning = true
      const expected = 'warning'
      expect(service.getValidationState(touched, error, warning)).to.equals(expected)
    })

    it('Expect to return success if only touched', () => {
      touched = true
      error = false
      warning = false
      const expected = 'success'
      expect(service.getValidationState(touched, error, warning)).to.equals(expected)
    })

    it('Expect to return null if not touched', () => {
      touched = false
      error = false
      warning = false
      const expected = null
      expect(service.getValidationState(touched, error, warning)).to.equals(expected)
    })
  })

  describe('getControlLabel', () => {
    it('Expect to return ControlLabel if label is defined', () => {
      const wrapper = shallow(service.getControlLabel('label'))
      expect(wrapper.instance()).to.be.instanceOf(ControlLabel)
    })
    it('Expect to return null if there is no label', () => {
      expect(service.getControlLabel(null)).to.equals(null)
    })
  })

  describe('getInputGroup', () => {
    let type, input, label, prefix, elmClass

    beforeEach(() => {
      input = 'input'
      label = 'label'
      prefix = 'prefix'
      type = 'type'
      elmClass = 'elmClass'
      mockService.expects('getPrefix').returns('my_Prefix')
      mockService.expects('getFormControl').returns('my_FormControl')
    })
    it('Expect to contain 1 div with className empty if has prefix', () => {
      const wrapper = shallow(service.getInputGroup(type, input, label, prefix, elmClass))
      const actual = wrapper.find('div').prop('className')
      const expected = 'elmClass'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain 1 div with className "no-prefix " if no prefix', () => {
      const wrapper = shallow(service.getInputGroup(type, input, label, null, elmClass))
      const actual = wrapper.find('div').prop('className')
      const expected = 'no-prefix elmClass'
      expect(actual).to.be.equal(expected)
    })
    it('Expect to contain 1 InputGroup', () => {
      const wrapper = shallow(service.getInputGroup(type, input, label, prefix, elmClass))
      const actual = wrapper.find(InputGroup)
      expect(actual).to.have.length(1)
    })
    it('Expect to have call getPrefix with good params', () => {
      const spy = chai.spy.on(service, 'getPrefix')
      service.getInputGroup(type, input, label, prefix, elmClass)
      expect(spy).to.have.been.called.with('prefix', 'type')
    })
    it('Expect to have call getFormControl with good params', () => {
      const spy = chai.spy.on(service, 'getFormControl')
      service.getInputGroup(type, input, label)
      expect(spy).to.have.been.called.with('type', 'input', 'label')
    })
  })

  describe('getPrefix', () => {
    let prefix, type

    it('Expect to return null is type is textarea', () => {
      type = 'textarea'
      expect(service.getPrefix(prefix, type)).to.equals(null)
    })

    it('Expect to return null is type not textarea and no prefix is given', () => {
      type = 'other'
      prefix = null
      expect(service.getPrefix(prefix, type)).to.equals(null)
    })

    it('Expect to contain 1 InputGroup.Addon if prefix is type icon', () => {
      type = 'other'
      prefix = {
        type: 'icon',
        value: 'value'
      }
      const wrapper = shallow(service.getPrefix(prefix, type))
      expect(wrapper.instance()).to.be.instanceOf(InputGroup.Addon)
    })

    it('Expect to contain 1 FontAwesome if prefix is type icon', () => {
      type = 'other'
      prefix = {
        type: 'icon',
        value: 'value'
      }
      const wrapper = shallow(service.getPrefix(prefix, type))
      const actual = wrapper.find(FontAwesome).findWhere(n => {
        return n.prop('name') === 'value'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 InputGroup.Addon if prefix is type text', () => {
      type = 'other'
      prefix = {
        type: 'text',
        value: 'value'
      }
      const wrapper = shallow(service.getPrefix(prefix, type))
      expect(wrapper.instance()).to.be.instanceOf(InputGroup.Addon)
    })
  })

  describe('getFormControl', () => {
    let type
    const input = {
      name: 'name'
    }

    it('Expect to return null is type is not allowed', () => {
      type = 'not-allowed'
      expect(service.getFormControl(type, input, 'label')).to.equals(null)
    })

    it('Expect to contain 1 FormControl if type is text', () => {
      type = 'text'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      expect(wrapper.instance()).to.be.instanceOf(FormControl)
    })

    it('Expect to contain 1 FormControl with valid prop type if type is text', () => {
      type = 'text'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      const actual = wrapper.props().type
      expect(actual).to.equals('text')
    })

    it('Expect to contain 1 FormControl with valid prop placeholder if type is text', () => {
      type = 'text'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      const actual = wrapper.props().placeholder
      expect(actual).to.equals('label')
    })

    it('Expect to contain 1 FormControl if type is email', () => {
      type = 'email'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      expect(wrapper.instance()).to.be.instanceOf(FormControl)
    })

    it('Expect to contain 1 FormControl with valid prop type if type is email', () => {
      type = 'email'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      const actual = wrapper.props().type
      expect(actual).to.equals('email')
    })

    it('Expect to contain 1 FormControl with valid prop placeholder if type is email', () => {
      type = 'email'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      const actual = wrapper.props().placeholder
      expect(actual).to.equals('label')
    })

    it('Expect to contain 1 FormControl if type is password', () => {
      type = 'password'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      expect(wrapper.instance()).to.be.instanceOf(FormControl)
    })

    it('Expect to contain 1 FormControl with valid prop type if type is password', () => {
      type = 'password'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      const actual = wrapper.props().type
      expect(actual).to.equals('password')
    })

    it('Expect to contain 1 FormControl with valid prop placeholder if type is password', () => {
      type = 'password'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      const actual = wrapper.props().placeholder
      expect(actual).to.equals('label')
    })

    it('Expect to contain 1 FormControl if type is textarea', () => {
      type = 'textarea'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      expect(wrapper.instance()).to.be.instanceOf(FormControl)
    })

    it('Expect to contain 1 FormControl with valid prop placeholder if type is textarea', () => {
      type = 'textarea'
      const wrapper = shallow(service.getFormControl(type, input, 'label'))
      const actual = wrapper.props().placeholder
      expect(actual).to.equals('label')
    })
  })
})
