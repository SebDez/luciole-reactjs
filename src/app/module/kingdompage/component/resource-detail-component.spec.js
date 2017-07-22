import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
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
        lastHarvest: new Date(),
        prodHistory: [100],
        storageHistory: [200],
        resourceHarvestInterval: 1000,
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
        lastHarvest: new Date(),
        prodHistory: [100],
        storageHistory: [200],
        resourceHarvestInterval: 1000,
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

    it('Expect to contain 1 span for storage, no storageHistory case', () => {
      compo.props.storageHistory = null
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'number' &&
          n.text() === '0'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for storage, empty storageHistory case', () => {
      compo.props.storageHistory = []
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

    it('Expect to contain 1 span for percentage, no storageHistory case', () => {
      compo.props.storageHistory = null
      const wrapper = shallow(compo.getActualResourceContent())
      const actual = wrapper.find('span').findWhere(n => {
        return n.prop('className') === 'no-number' &&
          n.text() === '(100 %)'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 span for percentage, empty storageHistory case', () => {
      compo.props.storageHistory = []
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
        lastHarvest: new Date(),
        prodHistory: [50, 100],
        storageHistory: [100, 200],
        resourceHarvestInterval: 1000,
        lang: 'fr'
      }
      compo = new ResourceDetailComponent(props)
      compo.getTrendArrow = () => 'res-getTrendArrow'
    })

    it('Expect to return a div', () => {
      const wrapper = shallow(compo.getResourceCategoryContent('Production'))
      const actual = wrapper.find('div')
      expect(actual).to.have.length(1)
    })

    it('Expect to return 2 span', () => {
      const wrapper = shallow(compo.getResourceCategoryContent('Production'))
      const actual = wrapper.find('span')
      expect(actual).to.have.length(2)
    })

    it('Expect to contain one FontAwesome with valid props', () => {
      const wrapper = shallow(compo.getResourceCategoryContent('Production'))
      const actual = wrapper.find(FontAwesome).findWhere(n => {
        return n.prop('name') === 'res-getTrendArrow'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to have call getTrendArrow with good params, case success with production category', () => {
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Production')
      expect(spy).to.have.been.called.with(50, 100)
    })

    it('Expect to have call getTrendArrow with good params, case no prodHistory with production category', () => {
      compo.props.prodHistory = null
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Production')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case empty prodHistory with production category', () => {
      compo.props.prodHistory = []
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Production')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case one prodHistory with production category', () => {
      compo.props.prodHistory = [50]
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Production')
      expect(spy).to.have.been.called.with(0, 50)
    })

    it('Expect to have call getTrendArrow with good params, case success with storage category', () => {
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Storage')
      expect(spy).to.have.been.called.with(100, 200)
    })

    it('Expect to have call getTrendArrow with good params, case no storageHistory with storage category', () => {
      compo.props.storageHistory = null
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Storage')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case empty storageHistory with storage category', () => {
      compo.props.storageHistory = []
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Storage')
      expect(spy).to.have.been.called.with(0, '0')
    })

    it('Expect to have call getTrendArrow with good params, case one storageHistory with storage category', () => {
      compo.props.storageHistory = [50]
      const spy = chai.spy.on(compo, 'getTrendArrow')
      compo.getResourceCategoryContent('Storage')
      expect(spy).to.have.been.called.with(0, 50)
    })
  })

  describe('getResourceLastHarvestContent ', () => {
    let compo = null

    beforeEach(() => {
      const props = {
        resource: 'goldIngot',
        amount: 100,
        lastHarvest: new Date(),
        prodHistory: [50, 100],
        storageHistory: [100, 200],
        resourceHarvestInterval: 1000,
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
        lastHarvest: new Date(),
        prodHistory: [50, 100],
        storageHistory: [100, 200],
        resourceHarvestInterval: 1000,
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
      const actual = wrapper.find(LuTimeCountDown).findWhere(n => {
        return n.prop('beginDate') === props.lastHarvest.toISOString() &&
          n.prop('lang') === 'fr' &&
          n.prop('endDate') === '2000-02-01T23:00:01.000Z'
      })
      expect(actual).to.have.length(1)
    })
  })
})
