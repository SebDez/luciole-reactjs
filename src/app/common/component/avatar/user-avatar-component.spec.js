import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import UserAvatar from './user-avatar-component'

describe('UserAvatar', () => {
  describe('render', () => {
    const props = {
      src: 'imgsrc'
    }

    it('Expect to contain a div with user-avatar className', () => {
      const wrapper = shallow(<UserAvatar {...props} />)
      const actual = wrapper.find('div').prop('className')
      const expected = 'user-avatar'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain an img with valid src', () => {
      const wrapper = shallow(<UserAvatar {...props} />)
      const actual = wrapper.find('img').prop('src')
      const expected = 'imgsrc'
      expect(actual).to.be.equal(expected)
    })
  })
})
