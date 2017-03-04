/* import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import LucioleSVG from './luciole-svg-component'
import ReactSVG from 'react-svg'

describe('LucioleSVG', () => {
  describe('render', () => {
    const props = {
      path: 'pathprop',
      callback: () => { return 0 },
      class: 'classnameprop'
    }

    it('Expect to contain ReactSVG', () => {
      const wrapper = shallow(<LucioleSVG {...props} />)
      expect(wrapper.find(ReactSVG)).to.be.length(1)
    })

    it('Expect to contain ReactSVG with good prop path', () => {
      const wrapper = shallow(<LucioleSVG {...props} />)
      const actual = wrapper.find(ReactSVG).props().path
      const expected = 'pathprop'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain ReactSVG with good prop callback', () => {
      const wrapper = shallow(<LucioleSVG {...props} />)
      const actual = wrapper.find(ReactSVG).props().callback
      const expected = props.callback
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain ReactSVG with good prop className', () => {
      const wrapper = shallow(<LucioleSVG {...props} />)
      const actual = wrapper.find(ReactSVG).props().className
      const expected = 'classnameprop'
      expect(actual).to.be.equal(expected)
    })
  })
})
*/
