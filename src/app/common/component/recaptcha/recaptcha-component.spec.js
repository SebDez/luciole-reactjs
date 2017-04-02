import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuRecaptcha from './recaptcha-component'
import ReCAPTCHA from 'react-google-recaptcha'

describe('LuRecaptcha', () => {
  describe('render', () => {
    let compo = null
    const props = {
      input: 'myicon',
      recaptchaKey: 'recaptcha'
    }

    beforeEach(() => {
      compo = new LuRecaptcha(props)
    })

    it('Expect to contain ReCAPTCHA with good prop theme', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ReCAPTCHA).props().theme
      const expected = 'dark'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain ReCAPTCHA with good prop className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ReCAPTCHA).props().className
      const expected = 'g-recaptcha'
      expect(actual).to.be.equal(expected)
    })
  })
})
