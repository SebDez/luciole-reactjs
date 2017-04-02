import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuciolePageHeader from './page-header-component'
import FontAwesome from 'react-fontawesome'
import LuI18n from './../i18n/luciole-i18n-component'

describe('LuciolePageHeader', () => {
  describe('render', () => {
    let compo = null
    const props = {
      icon: 'myicon',
      title: 'mytitle'
    }

    beforeEach(() => {
      compo = new LuciolePageHeader(props)
    })

    it('Expect to contain FontAwesome with good prop name', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(FontAwesome).props().name
      const expected = 'myicon'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LuI18n with good prop value', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(LuI18n).props().value
      const expected = 'mytitle'
      expect(actual).to.be.equal(expected)
    })
  })
})
