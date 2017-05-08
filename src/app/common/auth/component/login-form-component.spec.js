import {shallow} from 'enzyme'
import {expect} from 'chai'
import { Field } from 'redux-form'
import { LoginFormComponent } from './login-form-component'

describe('LoginFormComponent', () => {
  describe('render', () => {
    const props = {
      handleSubmit: () => 0
    }
    let compo = null

    beforeEach(() => {
      compo = new LoginFormComponent(props)
    })

    it('Expect to contain 1 form with valid className and valid onSubmit', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('form').findWhere(n => {
        return n.prop('onSubmit') === props.handleSubmit && n.prop('className') === 'luciole-form'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name and type', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'mail' && n.prop('type') === 'email'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name and type', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'password' && n.prop('type') === 'password'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') === 'buttons'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 button with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('button').findWhere(n => {
        return n.prop('className') === 'luciole-buttons'
      })
      expect(actual).to.have.length(1)
    })
  })
})
