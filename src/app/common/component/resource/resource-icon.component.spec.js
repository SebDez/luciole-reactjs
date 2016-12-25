import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import ResourceIcon from './resource-icon.component'
import LucioleSVG from './../../core/component/luciole-svg.component'

describe('ResourceIcon', () => {
  describe('render', () => {
    const props = {
      withCircle: true,
      resourceName: 'resourceName'
    }

    it('Expect to contain a div with valid className, case with circle', () => {
      const wrapper = shallow(<ResourceIcon {...props} />)
      const actual = wrapper.find('div').prop('className')
      const expected = 'resource-icon-circle resource-resourceName'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain a div with valid className, case with no circle', () => {
      props.withCircle = false
      const wrapper = shallow(<ResourceIcon {...props} />)
      const actual = wrapper.find('div').prop('className')
      const expected = 'resource-icon-no-circle resource-resourceName'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LucioleSVG with good prop class', () => {
      const wrapper = shallow(<ResourceIcon {...props} />)
      const actual = wrapper.find(LucioleSVG).props().class
      const expected = 'svg'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain LucioleSVG with good prop path', () => {
      const wrapper = shallow(<ResourceIcon {...props} />)
      const actual = wrapper.find(LucioleSVG).props().path
      const expected = './../../../../assets/svg/resource_resourceName.svg'
      expect(actual).to.be.equal(expected)
    })
  })
})
