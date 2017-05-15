import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuRecaptcha from './recaptcha-component'
import ReCAPTCHA from 'react-google-recaptcha'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('LuRecaptcha', () => {
  describe('render', () => {
    let compo = null
    const props = {
      input: 'myicon',
      recaptchaKey: 'recaptcha',
      meta: {
        touched: false,
        error: false
      }
    }

    beforeEach(() => {
      compo = new LuRecaptcha(props)
    })

    it('Expect to contain ReCAPTCHA with good prop theme to dark if not given', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ReCAPTCHA).props().theme
      const expected = 'dark'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain ReCAPTCHA with good prop theme to white if given', () => {
      props.theme = 'white'
      compo = new LuRecaptcha(props)
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ReCAPTCHA).props().theme
      const expected = 'white'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain ReCAPTCHA with good prop className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ReCAPTCHA).props().className
      const expected = 'g-recaptcha'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to not have call formHelper.renderInfoField on success', () => {
      compo.props.meta = {
        touched: false,
        error: false
      }
      const spy = chai.spy.on(compo.formHelper, 'renderInfoField')
      compo.render()
      expect(spy).not.to.have.been.called()
    })

    it('Expect to not have call formHelper.renderInfoField on touched but no error', () => {
      compo.props.meta = {
        touched: true,
        error: false
      }
      const spy = chai.spy.on(compo.formHelper, 'renderInfoField')
      compo.render()
      expect(spy).not.to.have.been.called()
    })

    it('Expect to not have call formHelper.renderInfoField on not touched but error', () => {
      compo.props.meta = {
        touched: false,
        error: true
      }
      const spy = chai.spy.on(compo.formHelper, 'renderInfoField')
      compo.render()
      expect(spy).not.to.have.been.called()
    })

    it('Expect to have call formHelper.renderInfoField on error and touched', () => {
      compo.props.meta = {
        touched: true,
        error: true
      }
      const spy = chai.spy.on(compo.formHelper, 'renderInfoField')
      compo.render()
      expect(spy).to.have.been.called()
    })
  })
})
