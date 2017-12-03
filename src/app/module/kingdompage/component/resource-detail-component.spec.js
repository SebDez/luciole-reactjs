import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { Grid, Row, Col } from 'react-bootstrap'
import ResourceDetailComponent from './resource-detail-component'
import FontAwesome from 'react-fontawesome'
import Moment from 'react-moment'
import LuTimeCountDown from './../../../common/component/time-countdown/time-countdown-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('ResourceDetailComponent', () => {
  describe('render', () => {
    let compo = null

    beforeEach(() => {
      const props = {
        resource: 'goldIngot',
        amount: 100,
        lastestHarvest: new Date(),
        production: [100],
        storage: [200],
        harvestInterval: 1000,
        lang: 'fr'
      }
      compo = new ResourceDetailComponent(props)
      compo.getActualResourceContent = () => (<div id='res-getActualResourceContent' />)
      compo.getResourceCategoryContent = () => (<div id='res-getResourceCategoryContent' />)
      compo.getResourceLastHarvestContent = () => (<div id='res-getResourceLastHarvestContent' />)
      compo.getResourceNextHarvestContent = () => (<div id='res-getResourceNextHarvestContent' />)
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

    it('Expect to contain 5 Col', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Col)
      expect(actual).to.have.length(5)
    })

    it('Expect to contain getActualResourceContent result', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('id') === 'res-getActualResourceContent'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain getResourceCategoryContent result', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('id') === 'res-getResourceCategoryContent'
      })
      expect(actual).to.have.length(2)
    })

    it('Expect to contain getResourceLastHarvestContent result', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('id') === 'res-getResourceLastHarvestContent'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain getResourceNextHarvestContent result', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('id') === 'res-getResourceNextHarvestContent'
      })
      expect(actual).to.have.length(1)
    })
  })

  describe('getTrendArrow', () => {
    let compo = null

    beforeEach(() => {
      compo = new ResourceDetailComponent({})
    })

    it('Expect to return long-arrow-up', () => {
      expect(compo.getTrendArrow(10, 20)).to.equal('long-arrow-up')
    })

    it('Expect to return long-arrow-up', () => {
      expect(compo.getTrendArrow(10, 20)).to.equal('long-arrow-up')
    })

    it('Expect to return long-arrow-down', () => {
      expect(compo.getTrendArrow(100, 20)).to.equal('long-arrow-down')
    })

    it('Expect to return long-arrow-right', () => {
      expect(compo.getTrendArrow(100, 100)).to.equal('long-arrow-right')
    })
  })

  describe('getActualResourceContent ', () => {
    let compo = null

    beforeEach(() => {
      const props = {
        resource: 'goldIngot',
        amount: 100,
        lastestHarvest: new Date(),
        production: [100],
        storage: [200],
        harvestInterval: 1000,
        lang: 'fr'
      }
      compo = new ResourceDetailComponent(props)
    })

    it('Expect to return a div', () => {
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('div')
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 4 span', () => {
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span')
      expect(actual).to.have.length(4)
    })

    it('Expect to contain 1 span for amount', () => {
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'number' &&
          n.text() === '100'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for storage, given case', () => {
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'number' &&
          n.text() === '200'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for storage, no storage case', () => {
      compo.props.storage = null
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'number' &&
          n.text() === '0'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for storage, empty storage case', () => {
      compo.props.storage = []
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'number' &&
          n.text() === '0'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for percentage, given case', () => {
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'no-number' &&
          n.text() === '(50 %)'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for percentage, no storage case', () => {
      compo.props.storage = null
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'no-number' &&
          n.text() === '(100 %)'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for percentage, empty storage case', () => {
      compo.props.storage = []
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'no-number' &&
          n.text() === '(100 %)'
      })
      expect(actual).to.have.length(1)
    })
  })

  describe('getResourceCategoryContent ', () => {
    let compo = null

    beforeEach(() => {
      const props = {
        resource: 'goldIngot',
        amount: 100,
        lastestHarvest: new Date(),
        production: [50, 100],
        storage: [100, 200],
        harvestInterval: 1000,
        lang: 'fr'
      }
      compo = new ResourceDetailComponent(props)
      compo.getTrendArrow = () => 'res-getTrendArrow'
    })

    it('Expect to return a div', () => {
      const wrapper = shallow(compo.getResourceCategoryContent('production'))
      const actual = wrapper.find('div')
      expect(actual).to.have.length(1)
    })

    it('Expect to return 2 span', () => {
      const wrapper = shallow(compo.getResourceCategoryContent('production'))
      const actual = wrapper.find('span')
      expect(actual).to.have.length(2)
    })

    it('Expect to contain one FontAwesome with valid props', () => {
      const wrapper = shallow(compo.getResourceCategoryContent('production'))
      const actual = wrapper.find(FontAwesome).findWhere(n => {
        return n.prop('name') === 'res-getTrendArrow'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to have call getTrendArrow with good params, case success with production category', () => {
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('production')
      expect(spy).to.have.been.called.with(50, 100)
    })

    it('Expect to have call getTrendArrow with good params, case no production with production category', () => {
      compo.props.production = null
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('production')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case empty production with production category', () => {
      compo.props.production = []
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('production')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case one production with production category', () => {
      compo.props.production = [50]
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('production')
      expect(spy).to.have.been.called.with(0, 50)
    })

    it('Expect to have call getTrendArrow with good params, case success with storage category', () => {
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('storage')
      expect(spy).to.have.been.called.with(100, 200)
    })

    it('Expect to have call getTrendArrow with good params, case no storage with storage category', () => {
      compo.props.storage = null
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('storage')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case empty storage with storage category', () => {
      compo.props.storage = []
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('storage')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case one storage with storage category', () => {
      compo.props.storage = [50]
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('storage')
      expect(spy).to.have.been.called.with(0, 50)
    })
  })

  describe('getResourceLastHarvestContent ', () => {
    let compo = null

    beforeEach(() => {
      const props = {
        resource: 'goldIngot',
        amount: 100,
        latestHarvest: new Date(),
        production: [50, 100],
        storage: [100, 200],
        harvestInterval: 1000,
        lang: 'fr'
      }
      compo = new ResourceDetailComponent(props)
    })

    it('Expect to return a div', () => {
      const wrapper = shallow(compo.getResourceLastHarvestContent())
      const actual = wrapper.find('div')
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Moment', () => {
      const wrapper = shallow(compo.getResourceLastHarvestContent())
      const actual = wrapper.find(Moment)
      expect(actual).to.have.length(1)
    })
  })

  describe('getResourceNextHarvestContent ', () => {
    let compo = null
    let props = null
    let clock

    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date(2000, 1, 2).getTime())
      props = {
        resource: 'goldIngot',
        amount: 100,
        latestHarvest: new Date(),
        production: [50, 100],
        storage: [100, 200],
        harvestInterval: 1000,
        lang: 'fr'
      }
      compo = new ResourceDetailComponent(props)
    })

    afterEach(() => {
      clock.restore()
    })

    it('Expect to return a div', () => {
      const wrapper = shallow(compo.getResourceNextHarvestContent())
      const actual = wrapper.find('div')
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 LuTimeCountDown with good props', () => {
      const wrapper = shallow(compo.getResourceNextHarvestContent())
      const expectedDate = new Date(new Date(2000, 1, 2).getTime() + 1000).toISOString()
      const actual = wrapper.find(LuTimeCountDown).findWhere(n => {
        return n.prop('beginDate') === props.latestHarvest.toISOString() &&
          n.prop('lang') === 'fr' &&
          n.prop('endDate') === expectedDate
      })
      expect(actual).to.have.length(1)
    })
  })
})
