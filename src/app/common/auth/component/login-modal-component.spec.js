import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuLoginModal from './login-modal-component'
import { Modal } from 'react-bootstrap'
import LoginFormComponent from './login-form-component'

describe('LuLoginModal', () => {
  describe('render', () => {
    const props = {
      show: true,
      handleLogin: () => 0,
      handleClose: () => 0,
      handleSignup: () => 0
    }
    let compo

    beforeEach(() => {
      compo = new LuLoginModal(props)
    })

    it('Expect to contain a Modal', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.instance()
      expect(actual).to.be.instanceOf(Modal)
    })

    it('Expect to contain a Modal with show prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.instance()
      expect(actual.props.show).to.equals(true)
    })

    it('Expect to contain a Modal with show prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.instance()
      expect(actual.props.onHide).to.equals(props.handleClose)
    })

    it('Expect to contain a button with onClick prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('button').prop('onClick')
      const expected = props.handleSignup
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain 1 Modal.Title', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Modal.Title)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Modal.Body', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Modal.Body)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Modal.Footer', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Modal.Footer)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 LoginFormComponent with valid prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(LoginFormComponent).findWhere(n => {
        return n.prop('onSubmit') === props.handleLogin
      })
      expect(actual).to.have.length(1)
    })
  })
})
