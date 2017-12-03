import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import MainPageUserCard from './main-user-card-component'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'
import {Link} from 'react-router'

describe('MainPageUserCard', () => {
  describe('render', () => {
    const props = {
      user: {
        avatar: {
          selected: 'avatar-src'
        },
        username: 'username'
      }
    }

    it('Expect to contain a div with valid className', () => {
      const wrapper = shallow(<MainPageUserCard {...props} />)
      const actual = wrapper.findWhere(n => {
        return n.type() === 'div' && n.prop('className') === 'hand-over main-user-card'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain UserAvatar with good prop src', () => {
      const wrapper = shallow(<MainPageUserCard {...props} />)
      const actual = wrapper.find(UserAvatar).props().src
      const expected = 'avatar-src'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain inner div with valid className', () => {
      const wrapper = shallow(<MainPageUserCard {...props} />)
      const actual = wrapper.findWhere(n => {
        return n.type() === 'div' && n.prop('className') === 'user-card-username'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain inner div with valid text', () => {
      const wrapper = shallow(<MainPageUserCard {...props} />)
      const actual = wrapper.findWhere(n => {
        return n.type() === 'div' && n.text() === 'username'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Link', () => {
      const wrapper = shallow(<MainPageUserCard {...props} />)
      const actual = wrapper.find(Link)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a Link with good prop src', () => {
      const wrapper = shallow(<MainPageUserCard {...props} />)
      const actual = wrapper.find(Link).props().to
      const expected = '/user'
      expect(actual).to.be.equal(expected)
    })
  })
})
