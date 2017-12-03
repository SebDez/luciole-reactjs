import { shallow } from 'enzyme'
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
        goldIngotAmount: 100,
        latestgoldIngotHarvest: new Date(),
        goldIngotProductionHistory: [],
        goldIngotStorageHistory: [150]
      }
    }
    let compo

    beforeEach(() => {
      compo = new SidebarBlockResources(props)
    })

    it('Expect to contain a SidebarLineResources withg valid resourceName', () => {
      const wrapper = shallow(compo.getLineElementForResource('goldIngot'))
      const actual = wrapper.instance().props.resourceName
      const expected = 'goldIngot'
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources with valid amount', () => {
      const wrapper = shallow(compo.getLineElementForResource('goldIngot'))
      const actual = wrapper.instance().props.amount
      const expected = 100
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources with valid storage', () => {
      const wrapper = shallow(compo.getLineElementForResource('goldIngot'))
      const actual = wrapper.instance().props.storage
      const expected = 150
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources with amount at 0 if no resource amount given', () => {
      compo.props.userResource.goldIngotAmount = null
      const wrapper = shallow(compo.getLineElementForResource('goldIngot'))
      const actual = wrapper.instance().props.amount
      const expected = 0
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources with storage at 0 if no resource storage given', () => {
      compo.props.userResource.goldIngotStorageHistory = null
      const wrapper = shallow(compo.getLineElementForResource('goldIngot'))
      const actual = wrapper.instance().props.storage
      const expected = 0
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources with storage at 0 if resource storage is empty', () => {
      compo.props.userResource.goldIngotStorageHistory = []
      const wrapper = shallow(compo.getLineElementForResource('goldIngot'))
      const actual = wrapper.instance().props.storage
      const expected = 0
      expect(actual).to.equal(expected)
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

    it('Expect to contain 3 Row', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Row)
      expect(actual).to.have.length(3)
    })

    it('Expect to contain 6 Col', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Col).findWhere(n => {
        return n.prop('className') === 'sidebar-block-col'
      })
      expect(actual).to.have.length(6)
    })

    it('Expect to have getLineElementForResource 6 times', () => {
      const spy = chai.spy.on(compo, 'getLineElementForResource')
      compo.render()
      expect(spy).to.have.been.called.exactly(6)
    })
  })
})
