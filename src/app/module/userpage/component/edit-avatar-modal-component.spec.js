import {shallow} from 'enzyme'
import {expect} from 'chai'
import EditAvatarModal from './edit-avatar-modal-component'
import { Modal } from 'react-bootstrap'
import EditAvatarFormComponent from './edit-avatar-form-component'

describe('EditAvatarModal', () => {
  describe('render', () => {
    const props = {
      show: true,
      avatar: {},
      handleEdit: () => 0,
      handleClose: () => 0
    }
    let compo

    beforeEach(() => {
      compo = new EditAvatarModal(props)
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

    it('Expect to contain 1 EditAvatarFormComponent with valid props', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(EditAvatarFormComponent).findWhere(n => {
        return n.prop('onSubmit') === props.handleEdit &&
        n.prop('handleCancel') === props.handleClose &&
        n.prop('avatar') === props.avatar
      })
      expect(actual).to.have.length(1)
    })
  })
})
