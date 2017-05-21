import {shallow} from 'enzyme'
import {expect} from 'chai'
import { Field } from 'redux-form'
import { EditUsernameFormComponent } from './edit-username-form-component'

describe('EditUsernameFormComponent', () => {
  describe('render', () => {
    const props = {
      initialValues: {username: 'myusername'},
      handleCancel: () => 0,
      handleSubmit: () => 0
    }
    let compo = null

    beforeEach(() => {
      compo = new EditUsernameFormComponent(props)
    })

    it('Expect to contain 1 form with valid className and valid onSubmit', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('form').findWhere(n => {
        return n.prop('onSubmit') === props.handleSubmit && n.prop('className') === 'luciole-form'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name and type (username)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'username' && n.prop('type') === 'text'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') === 'luciole-duo-buttons'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 button with className lu-cancel-btn', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('button').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('lu-cancel-btn')
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 2 button with className luciole-buttons', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('button').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('luciole-buttons')
      })
      expect(actual).to.have.length(2)
    })
  })
})
