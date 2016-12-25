import {shallow} from 'enzyme'
import SidebarBlockResources from './sidebar-block-resources-component'
import { Grid, Row, Col } from 'react-bootstrap'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('SidebarBlockResources', () => {
  describe('getLineElementForResource', () => {
    const props = {
      userResource: {
        gold: {
          amount: 10,
          storage: 100
        }
      }
    }
    let compo

    beforeEach(() => {
      compo = new SidebarBlockResources(props)
    })

    it('Expect to contain a SidebarLineResources withg valid resourceName', () => {
      const wrapper = shallow(compo.getLineElementForResource('gold'))
      const actual = wrapper.instance().props.resourceName
      const expected = 'gold'
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources withg valid amount', () => {
      const wrapper = shallow(compo.getLineElementForResource('gold'))
      const actual = wrapper.instance().props.amount
      const expected = 10
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources withg valid storage', () => {
      const wrapper = shallow(compo.getLineElementForResource('gold'))
      const actual = wrapper.instance().props.storage
      const expected = 100
      expect(actual).to.equal(expected)
    })

    it('Expect to return null if no resource', () => {
      expect(compo.getLineElementForResource('unknow')).to.equal(null)
    })
  })

  describe('render', () => {
    const props = {
      userResource: {
        gold: {
          amount: 10,
          storage: 100
        }
      }
    }
    let compo

    beforeEach(() => {
      compo = new SidebarBlockResources(props)
    })

    it('Expect to contain a Grid', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.instance()
      expect(actual).to.be.instanceOf(Grid)
    })

    it('Expect to contain 2 Row', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Row)
      expect(actual).to.have.length(2)
    })

    it('Expect to contain 3 Col', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Col).findWhere(n => {
        return n.prop('className') === 'sidebar-block-col'
      })
      expect(actual).to.have.length(3)
    })

    it('Expect to have getLineElementForResource 3 times', () => {
      const spy = chai.spy.on(compo, 'getLineElementForResource')
      compo.render()
      expect(spy).to.have.been.called.exactly(3)
    })
  })
})
