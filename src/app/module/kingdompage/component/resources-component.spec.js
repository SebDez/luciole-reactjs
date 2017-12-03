import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ResourcesComponent from './resources-component'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceDetailComponent from './resource-detail-component'
import Constants from './../../../common/constants'

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
      compo.getResourceDetailElements = () => (<h1>res-getResourceDetailElements</h1>)
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

    it('Expect to have call getResourceDetailElements once', () => {
      const spy = chai.spy.on(compo, 'getResourceDetailElements')
      compo.render()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to contain getResourceDetailElements result', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('h1').text()
      const expected = 'res-getResourceDetailElements'
      expect(actual).to.equal(expected)
    })
  })

  describe('getResourceDetailElements', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        lang: 'fr',
        resources: {}
      }
      Constants.KINGDOM.RESOURCES_LIST.forEach(res => {
        props.resources[res + 'Amount'] = 0
        props.resources['latest' + res + 'Harvest'] = new Date()
        props.resources[res + 'ProductionHistory'] = [42]
        props.resources[res + 'StorageHistory'] = [23]
        props.resources[res + 'HarvestInterval'] = 100
        props.resources[res + 'Amount'] = 50
      })
      compo = new ResourcesComponent(props)
    })

    it('Expect to return a list of 12 elements', () => {
      const expected = 12
      const actual = compo.getResourceDetailElements().length
      expect(actual).to.equal(expected)
    })

    it('Expect to contain 1 Col', () => {
      const wrapper = shallow(compo.getResourceDetailElements()[0])
      const actual = wrapper.instance()
      expect(actual).to.be.instanceOf(Col)
    })

    it('Expect to contain one ResourceDetailComponent with good props for food', () => {
      const wrapper = shallow(compo.getResourceDetailElements()[0])
      const actual = wrapper.find(ResourceDetailComponent).findWhere(n => {
        return n.prop('lang') === 'fr' &&
          n.prop('amount') === 50 &&
          n.prop('production')[0] === 42 &&
          n.prop('storage')[0] === 23 &&
          n.prop('harvestInterval') === 100 &&
          n.prop('resource') === 'food'
      })
      expect(actual).to.have.length(1)
    })
  })
})
