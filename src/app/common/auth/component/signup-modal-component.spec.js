import {shallow} from 'enzyme'
import {expect} from 'chai'
import SignUpLoginModal from './signup-modal-component'
import { Modal } from 'react-bootstrap'
import SignUpFormComponent from './signup-form-component'

describe('SignUpLoginModal', () => {
  describe('render', () => {
    const props = {
      show: true,
      handleSignUp: () => 0,
      handleClose: () => 0
    }
    let compo

    beforeEach(() => {
      compo = new SignUpLoginModal(props)
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

    it('Expect to contain 1 SignUpFormComponent with valid prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(SignUpFormComponent).findWhere(n => {
        return n.prop('onSubmit') === props.handleSignUp
      })
      expect(actual).to.have.length(1)
    })
  })
})
