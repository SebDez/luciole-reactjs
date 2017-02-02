import {shallow} from 'enzyme'
import LuDropdownToggle from './dropdown-toggle-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let expect = chai.expect

describe('LuDropdownToggle', () => {
  describe('handleClick', () => {
    let props, compo, spy

    beforeEach(() => {
      props = {
        onClick: () => 0
      }
      compo = new LuDropdownToggle(props)
    })

    it('Expect to have call props onclick cb', () => {
      spy = chai.spy.on(compo.props, 'onClick')
      let e = {
        preventDefault: () => 0
      }
      compo.handleClick(e)
      expect(spy).to.have.been.called.once()
    })
  })

  describe('render', () => {
    let props, compo

    beforeEach(() => {
      props = {
        onClick: () => 0
      }
      compo = new LuDropdownToggle(props)
    })

    it('Expect to contain an div with valid onClick ref', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('onClick') === compo.handleClick
      })
      expect(actual).to.have.length(1)
    })
  })
})
