import {shallow} from 'enzyme'
import LuDropDown from './dropdown-component'
import LuDropdownToggle from './dropdown-toggle-component'
import LuDropdownMenu from './dropdown-menu-component'
import { Dropdown, MenuItem } from 'react-bootstrap'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let expect = chai.expect

describe('LuDropDown', () => {
  describe('render', () => {
    let props, compo

    beforeEach(() => {
      props = {
        id: 'my-id',
        open: true,
        choices: [{key: 'my-key-1', label: 'my-label-1'}, {key: 'my-key-2', label: 'my-label-2'}],
        currSelected: 'my-currSelected',
        onToggle: () => 0,
        onSelect: () => 0,
        containerClass: 'my-containerClass',
        dropdownClass: 'my-dropdownClass',
        listClass: 'my-listClass'
      }
      compo = new LuDropDown(props)
    })

    it('Expect to contain a Dropdown with valid "open" prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Dropdown).findWhere(n => {
        return n.prop('open') === true
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a Dropdown with valid "onToggle" prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Dropdown).findWhere(n => {
        return n.prop('onToggle') === props.onToggle
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a Dropdown with valid "className" prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Dropdown).findWhere(n => {
        return n.prop('className') === 'my-dropdownClass'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a Dropdown with valid "id" prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Dropdown).findWhere(n => {
        return n.prop('id') === 'my-id'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a LuDropdownToggle with valid "bsRole" prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(LuDropdownToggle).findWhere(n => {
        return n.prop('bsRole') === 'toggle'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a LuDropdownMenu with valid "bsRole" prop', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(LuDropdownMenu).findWhere(n => {
        return n.prop('bsRole') === 'menu'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to have call getMenuItems once', () => {
      let spy = chai.spy.on(compo, 'getMenuItems')
      compo.render()
      expect(spy).to.have.been.called.once()
    })
  })

  describe('getMenuItems', () => {
    let props, compo

    beforeEach(() => {
      props = {
        id: 'my-id',
        open: true,
        choices: [{key: 'my-key-1', label: 'my-label-1'}, {key: 'my-key-2', label: 'my-label-2'}],
        currSelected: 'my-currSelected',
        onToggle: () => 0,
        onSelect: () => 0,
        containerClass: 'my-containerClass',
        dropdownClass: 'my-dropdownClass',
        listClass: 'my-listClass'
      }
      compo = new LuDropDown(props)
    })

    it('Expect to contain 2 items', () => {
      const res = compo.getMenuItems()
      expect(res).to.have.length(2)
    })

    it('Expect to contain 2 items of type MenuItem', () => {
      const wrapper = shallow(compo.getMenuItems()[0])
      const actual = wrapper.instance()
      expect(actual).to.be.instanceOf(MenuItem)
    })
  })
})
