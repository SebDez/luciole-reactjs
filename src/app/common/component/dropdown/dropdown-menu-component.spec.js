import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuDropdownMenu from './dropdown-menu-component'

describe('LuDropdownMenu', () => {
  describe('render', () => {
    const props = {
      listClass: 'my-listClass'
    }

    it('Expect to contain an ul with my-listClass className', () => {
      const wrapper = shallow(<LuDropdownMenu {...props} />)
      const actual = wrapper.find('ul').prop('className')
      const expected = 'my-listClass'
      expect(actual).to.be.equal(expected)
    })
  })
})
