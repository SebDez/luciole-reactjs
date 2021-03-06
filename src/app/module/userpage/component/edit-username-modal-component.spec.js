import {shallow} from 'enzyme'
import {expect} from 'chai'
import EditUsernameModal from './edit-username-modal-component'
import { Modal } from 'react-bootstrap'
import EditUsernameFormComponent from './edit-username-form-component'

describe('EditUsernameModal', () => {
  describe('render', () => {
    const props = {
      show: true,
      username: 'username',
      handleEdit: () => 0,
      handleClose: () => 0
    }
    let compo

    beforeEach(() => {
      compo = new EditUsernameModal(props)
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

    it('Expect to contain 1 EditUsernameFormComponent with valid props', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(EditUsernameFormComponent).findWhere(n => {
        return n.prop('onSubmit') === props.handleEdit &&
        n.prop('handleCancel') === props.handleClose &&
        n.prop('initialValues').username === 'username'
      })
      expect(actual).to.have.length(1)
    })
  })
})
