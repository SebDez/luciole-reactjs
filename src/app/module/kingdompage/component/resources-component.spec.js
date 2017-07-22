import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import ResourcesComponent from './resources-component'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceDetailComponent from './resource-detail-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('ResourcesComponent', () => {
  describe('render', () => {
    let compo = null

    beforeEach(() => {
      const props = {
        lang: 'fr',
        resources: {
          goldIngotAmount: 0,
          latestgoldIngotHarvest: new Date(),
          goldIngotProductionHistory: [42],
          goldIngotStorageHistory: [23],
          goldIngotHarvestInterval: 100,
          woodAmount: 50,
          latestwoodHarvest: new Date(),
          woodProductionHistory: [100],
          woodStorageHistory: [200],
          woodHarvestInterval: 300
        }
      }
      compo = new ResourcesComponent(props)
      compo.getAllResourcesDetailElement = () => (<h1>res-getAllResourcesDetailElement</h1>)
    })

    it('Expect to contain 1 Grid', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.instance()
      expect(actual).to.be.instanceOf(Grid)
    })

    it('Expect to contain 1 Row', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Row)
      expect(actual).to.have.length(1)
    })

    it('Expect to have call getAllResourcesDetailElement once', () => {
      const spy = chai.spy.on(compo, 'getAllResourcesDetailElement')
      compo.render()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to contain getAllResourcesDetailElement result', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('h1').text()
      const expected = 'res-getAllResourcesDetailElement'
      expect(actual).to.equal(expected)
    })
  })

  describe('getAllResourcesDetailElement', () => {
    let compo = null

    beforeEach(() => {
      const props = {}
      compo = new ResourcesComponent(props)
      compo.getResourceDetailElement = () => 'res-getResourceDetailElement'
    })

    it('Expect to return an array of 4', () => {
      expect(compo.getAllResourcesDetailElement().length).to.equal(4)
    })

    it('Expect to return an array of getResourceDetailElement result', () => {
      expect(compo.getAllResourcesDetailElement()[0]).to.equal('res-getResourceDetailElement')
    })

    it('Expect to have call getResourceDetailElement 4 times', () => {
      const spy = chai.spy.on(compo, 'getResourceDetailElement')
      compo.getAllResourcesDetailElement()
      expect(spy).to.have.been.called.exactly(4)
    })
  })

  describe('getResourceDetailElement', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        lang: 'fr',
        resources: {
          goldIngotAmount: 0,
          latestgoldIngotHarvest: new Date(),
          goldIngotProductionHistory: [42],
          goldIngotStorageHistory: [23],
          goldIngotHarvestInterval: 100,
          woodAmount: 50,
          latestwoodHarvest: new Date(),
          woodProductionHistory: [100],
          woodStorageHistory: [200],
          woodHarvestInterval: 300
        }
      }
      compo = new ResourcesComponent(props)
    })

    it('Expect to contain 1 Col', () => {
      const wrapper = shallow(compo.getResourceDetailElement('goldIngot', 1))
      const actual = wrapper.instance()
      expect(actual).to.be.instanceOf(Col)
    })

    it('Expect to contain one ResourceDetailComponent with good props for goldIngot', () => {
      const wrapper = shallow(compo.getResourceDetailElement('goldIngot', 1))
      const actual = wrapper.find(ResourceDetailComponent).findWhere(n => {
        return n.prop('lang') === 'fr' &&
        n.prop('amount') === 0 &&
        n.prop('lastHarvest') === props.resources.latestgoldIngotHarvest &&
        n.prop('prodHistory')[0] === 42 &&
        n.prop('storageHistory')[0] === 23 &&
        n.prop('resourceHarvestInterval') === 100 &&
        n.prop('resource') === 'goldIngot'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain one ResourceDetailComponent with good props for wood', () => {
      const wrapper = shallow(compo.getResourceDetailElement('wood', 1))
      const actual = wrapper.find(ResourceDetailComponent).findWhere(n => {
        return n.prop('lang') === 'fr' &&
        n.prop('amount') === 50 &&
        n.prop('lastHarvest') === props.resources.latestwoodHarvest &&
        n.prop('prodHistory')[0] === 100 &&
        n.prop('storageHistory')[0] === 200 &&
        n.prop('resourceHarvestInterval') === 300 &&
        n.prop('resource') === 'wood'
      })
      expect(actual).to.have.length(1)
    })
  })
})
