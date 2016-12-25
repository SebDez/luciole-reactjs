import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import WorkInProgress from './wip-component'

describe('WorkInProgress', () => {
  describe('render', () => {
    const props = {}

    it('Expect to contain an h1 with WORK IN PROGRESS', () => {
      const wrapper = shallow(<WorkInProgress {...props} />)
      const actual = wrapper.find('h1').text()
      const expected = 'WORK IN PROGRESS'
      expect(actual).to.be.equal(expected)
    })
  })
})
