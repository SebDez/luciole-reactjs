import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuI18n from './luciole-i18n-component'
import { Translate } from 'react-redux-i18n'

describe('LuI18n', () => {
  describe('render', () => {
    const props = {
      value: 'myvalue'
    }

    it('Expect to contain a Translate element', () => {
      const wrapper = shallow(<LuI18n {...props} />)
      expect(wrapper.find(Translate)).to.be.length(1)
    })

    it('Expect to contain a Translate with good value', () => {
      const wrapper = shallow(<LuI18n {...props} />)
      const actual = wrapper.find(Translate).prop('value')
      const expected = 'myvalue'
      expect(actual).to.be.equal(expected)
    })
  })
})
