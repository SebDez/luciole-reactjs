import {shallow} from 'enzyme'
import {expect} from 'chai'
import UserFieldRead from './user-field-read-component'
import MockI18n from './../../../../test/mock/mock-i18n'
import FontAwesome from 'react-fontawesome'

describe('UserFieldRead', () => {
  describe('render', () => {
    let props, compo

    beforeEach(() => {
      props = {
        label: 'mylabel'
      }
      compo = new UserFieldRead(props)
      compo.i18n = new MockI18n()
    })

    it('Expect to contain a label', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('label')
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with class lu-well', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('lu-well')
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with class well', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('lu-well')
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with class text', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('text')
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with not_set value if no value given', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('text')
      })
      expect(actual.text()).to.equal('application.not_set')
    })

    it('Expect to contain 1 div with good value', () => {
      compo.props.value = 'myvalue'
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('text')
      })
      expect(actual.text()).to.equal('myvalue')
    })

    it('Expect to contain 1 FontAwesome if there is an handleEdit', () => {
      compo.props.handleEdit = () => 0
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(FontAwesome)
      expect(actual).to.have.length(1)
    })
  })
})
