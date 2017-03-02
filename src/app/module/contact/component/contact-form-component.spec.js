import {shallow} from 'enzyme'
import {expect} from 'chai'
import { Field } from 'redux-form'
import { ContactFormComponent } from './contact-form-component'

describe('ContactFormComponent', () => {
  describe('render', () => {
    let compo = null
    const props = {}

    beforeEach(() => {
      compo = new ContactFormComponent(props)
    })

    it('Expect to contain a form', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('form')
      expect(actual).to.be.length(1)
    })

    it('Expect to contain 3 Field', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field)
      expect(actual).to.be.length(3)
    })

    it('Expect to contain 1 button', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('button')
      expect(actual).to.be.length(1)
    })

    it('Expect to contain 1 Field with name "subject"', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'subject'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 2 Field with type "text"', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('type') === 'text'
      })
      expect(actual).to.have.length(2)
    })

    it('Expect to contain 1 Field with name "mail"', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'mail'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with type "email"', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('type') === 'email'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with name "content"', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'content'
      })
      expect(actual).to.have.length(1)
    })
  })
})
