import {shallow} from 'enzyme'
import {expect} from 'chai'
import { Field } from 'redux-form'
import { SignInFormComponent } from './signin-form-component'
import {Link} from 'react-router'

describe('SignInFormComponent', () => {
  describe('render', () => {
    const props = {
      handleSubmit: () => 0
    }
    let compo = null

    beforeEach(() => {
      compo = new SignInFormComponent(props)
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

    it('Expect to contain 1 Field with valid name and type (mail)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'mail' && n.prop('type') === 'email'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name and type (password1)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'password1' && n.prop('type') === 'password'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name and type (password2)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'password2' && n.prop('type') === 'password'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name (captcharesponse)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'captcharesponse'
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

    it('Expect to contain 1 Link with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Link).findWhere(n => {
        return n.prop('to') === '/cgu'
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

    it('Expect to contain 1 div with recaptcha className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') === 'recaptcha'
      })
      expect(actual).to.have.length(1)
    })
  })
})
