import {shallow} from 'enzyme'
import SidebarLineResources from './sidebar-line-resources.component'
import ResourceIcon from './../../../common/component/resource/resource-icon.component'
import ReactTooltip from 'react-tooltip'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('SidebarLineResources', () => {
  describe('render', () => {
    const props = {
      resourceName: 'wood',
      amount: 60,
      storage: 100
    }
    let mockCompo, spy, compo

    beforeEach(() => {
      compo = new SidebarLineResources(props)
      mockCompo = sinon.mock(compo)
    })

    afterEach(() => {
      mockCompo.verify()
      mockCompo.restore()
    })

    it('Expect to contain a div with valid className', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'success', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('className') === 'resource-line'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain a div with valid data-tip text', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'success', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('data-tip') === 'text'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain a div with valid data-tip style, success case', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'success', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('data-type') === 'success'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain a div with valid data-tip style, warning case', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'warning', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('data-type') === 'warning'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain a div with valid data-tip style, error case', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'error', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('data-type') === 'error'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain ResourceIcon with good prop withCircle', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'error', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ResourceIcon).props().withCircle
      const expected = true
      expect(actual).to.equal(expected)
    })

    it('Expect to contain ResourceIcon with good prop resourceName', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'error', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ResourceIcon).props().resourceName
      const expected = 'wood'
      expect(actual).to.equal(expected)
    })

    it('Expect to contain one ReactTooltip', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'error', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ReactTooltip)
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain a div with valid className, success case', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'success', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('className') === 'resource-line-text resource-success'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain a div with valid className, warning case', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'warning', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('className') === 'resource-line-text resource-warning'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to contain a div with valid className, error case', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'error', text: 'text'})
      const wrapper = shallow(compo.render())
      const actual = wrapper.findWhere(n => {
        return n.prop('className') === 'resource-line-text resource-error'
      })
      const expected = 1
      expect(actual.length).to.equal(expected)
    })

    it('Expect to have call getNumberFormatted once', () => {
      mockCompo.expects('getToolTipDataFromResource').returns({style: 'success', text: 'text'})
      spy = chai.spy.on(compo, 'getNumberFormatted')
      compo.render()
      expect(spy).to.have.been.called.once()
    })
  })

  describe('getToolTipDataFromResource', () => {
    const props = {
      resourceName: 'wood',
      amount: 60,
      storage: 100
    }
    let compo

    beforeEach(() => {
      compo = new SidebarLineResources(props)
    })

    it('Expect to return an object with valid style, success case', () => {
      compo.props.amount = 50
      expect(compo.getToolTipDataFromResource().style).to.equal('success')
    })

    it('Expect to return an object with valid text, success case', () => {
      compo.props.amount = 50
      expect(compo.getToolTipDataFromResource().text).to.equal('(50%) 50/100')
    })

    it('Expect to return an object with valid style, warning case', () => {
      compo.props.amount = 80
      expect(compo.getToolTipDataFromResource().style).to.equal('warning')
    })

    it('Expect to return an object with valid text, warning case', () => {
      compo.props.amount = 80
      expect(compo.getToolTipDataFromResource().text).to.equal('(80%) 80/100')
    })

    it('Expect to return an object with valid style, error case', () => {
      compo.props.amount = 100
      expect(compo.getToolTipDataFromResource().style).to.equal('error')
    })

    it('Expect to return an object with valid text, error case', () => {
      compo.props.amount = 100
      expect(compo.getToolTipDataFromResource().text).to.equal('(100%) 100/100')
    })
  })
})
