import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuProgressBar from './progress-bar-component'
import { ProgressBar } from 'react-bootstrap'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('LuProgressBar', () => {
  describe('constructor', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        updateInterval: null
      }
      compo = new LuProgressBar(props)
    })

    it('Expect to have set interval if not given', () => {
      expect(compo.interval).to.equal(1000)
    })
  })

  describe('render', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        initialValue: 10,
        goalValue: 100,
        bsStyle: 'warning',
        active: true,
        updateInterval: 10,
        counter: () => 0,
        noLabel: false,
        withDates: false,
        lang: 'fr'
      }
      compo = new LuProgressBar(props)
      compo.getPercentageValue = () => 42
      compo.getLabel = () => 'my-label'
    })

    it('Expect to contain one ProgressBar with good props, with given label and given style', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ProgressBar).findWhere(n => {
        return n.prop('active') === true &&
        n.prop('bsStyle') === 'warning' &&
        n.prop('now') === 42 &&
        n.prop('className') === 'lu-progress-bar' &&
        n.prop('label') === 'my-label'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain one ProgressBar with good props, with no given label and no given style', () => {
      props.noLabel = true
      props.bsStyle = null
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(ProgressBar).findWhere(n => {
        return n.prop('active') === true &&
        n.prop('bsStyle') === 'info' &&
        n.prop('now') === 42 &&
        n.prop('className') === 'lu-progress-bar' &&
        n.prop('label') === ''
      })
      expect(actual).to.have.length(1)
    })
  })

  describe('componentWillReceiveProps', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        counter: true,
        initialValue: 100
      }
      compo = new LuProgressBar(props)
      compo.setState = () => 0
      compo.tick = () => 1
    })

    it('Expect to call setState is there is counter', () => {
      const spy = chai.spy.on(compo, 'setState')
      compo.componentWillReceiveProps()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect not to call setState is there is no counter', () => {
      props.counter = false
      const spy = chai.spy.on(compo, 'setState')
      compo.componentWillReceiveProps()
      expect(spy).not.to.have.been.called
    })

    it('Expect to call setInterval', () => {
      const spy = chai.spy.on(global, 'setInterval')
      compo.componentWillReceiveProps()
      expect(spy).to.have.been.called.exactly(1)
    })
  })

  describe('componentWillUnmount', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        counter: true
      }
      compo = new LuProgressBar(props)
      compo.endTick = () => 0
    })

    it('Expect to call endTick is there is counter', () => {
      const spy = chai.spy.on(compo, 'endTick')
      compo.componentWillUnmount()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect not to call endTick is there is no counter', () => {
      props.counter = false
      const spy = chai.spy.on(compo, 'endTick')
      compo.componentWillUnmount()
      expect(spy).not.to.have.been.called
    })
  })

  describe('endTick', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        counter: true
      }
      compo = new LuProgressBar(props)
      compo.state = {timer: 'timer'}
    })

    it('Expect to call clearInterval', () => {
      const spy = chai.spy.on(global, 'clearInterval')
      compo.endTick()
      expect(spy).to.have.been.called.exactly(1)
    })
  })

  describe('getPercentageValue', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        goalValue: 100,
        initialValue: 42
      }
      compo = new LuProgressBar(props)
      compo.state = {counter: 15}
    })

    it('Expect to return percentage, counter given, goal > 0', () => {
      expect(compo.getPercentageValue()).to.equal(15)
    })

    it('Expect to return percentage, percentage > 100', () => {
      compo.state = {counter: 200}
      expect(compo.getPercentageValue()).to.equal(100)
    })

    it('Expect to return percentage, no counter given, goal > 0', () => {
      compo.state.counter = null
      expect(compo.getPercentageValue()).to.equal(42)
    })

    it('Expect to return percentage, counter given, goal = 0', () => {
      compo.props.goalValue = 0
      expect(compo.getPercentageValue()).to.equal(0)
    })
  })

  describe('tick', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        goalValue: 100,
        initialValue: 42,
        counter: () => 0
      }
      compo = new LuProgressBar(props)
      compo.setState = () => 0
      compo.endTick = () => 0
      compo.state = {counter: 15}
    })

    it('Expect to have call setState if state counter < goal, count given', () => {
      const spy = chai.spy.on(compo, 'setState')
      compo.tick()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to have call setState if state counter < goal, no state given', () => {
      compo.state = null
      const spy = chai.spy.on(compo, 'setState')
      compo.tick()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to have call setState if state counter < goal, no count given', () => {
      compo.state = {counter: null}
      const spy = chai.spy.on(compo, 'setState')
      compo.tick()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to have call endTick if state counter > goal, count given', () => {
      compo.state = {counter: 1500}
      const spy = chai.spy.on(compo, 'endTick')
      compo.tick()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to have call endTick if state counter > goal, no state given', () => {
      compo.props.initialValue = 1500
      compo.state = null
      const spy = chai.spy.on(compo, 'endTick')
      compo.tick()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to have call endTick if state counter > goal, no count given', () => {
      compo.props.initialValue = 1500
      compo.state = {counter: null}
      const spy = chai.spy.on(compo, 'endTick')
      compo.tick()
      expect(spy).to.have.been.called.exactly(1)
    })
  })

  describe('getLabel', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {
        withDates: false,
        initialValue: 42
      }
      compo = new LuProgressBar(props)
      compo.state = {counter: 15}
      compo.getTimeBetweenDates = () => 1
    })

    it('Expect to return label, counter given but no withDates', () => {
      expect(compo.getLabel()).to.equal(15)
    })

    it('Expect to return label, no state given but no withDates', () => {
      compo.state = null
      expect(compo.getLabel()).to.equal(42)
    })

    it('Expect to return label, no counter given but no withDates', () => {
      compo.state = {counter: null}
      expect(compo.getLabel()).to.equal(42)
    })

    it('Expect to have call getTimeBetweenDates', () => {
      compo.props.withDates = true
      const spy = chai.spy.on(compo, 'getTimeBetweenDates')
      compo.getLabel()
      expect(spy).to.have.been.called.exactly(1)
    })

    it('Expect to return label, counter given and withDates', () => {
      compo.props.withDates = true
      expect(compo.getLabel()).to.equal(1)
    })

    it('Expect to return ended, counter given and withDates but no difference between dates', () => {
      compo.props.withDates = true
      compo.getTimeBetweenDates = () => false
      expect(compo.getLabel()).to.equal('Terminé')
    })
  })

  describe('getTimeBetweenDates', () => {
    let compo = null
    let props = null

    beforeEach(() => {
      props = {}
      compo = new LuProgressBar(props)
    })

    it('Expect to return false if no difference', () => {
      const startDate = new Date(2002, 1, 1)
      const endDate = new Date(2001, 1, 1)
      expect(compo.getTimeBetweenDates(startDate, endDate)).to.equal(false)
    })

    it('Expect to return empty string if same instant', () => {
      const startDate = new Date(2001, 1, 1)
      const endDate = new Date(2001, 1, 1)
      expect(compo.getTimeBetweenDates(startDate, endDate)).to.equal('')
    })

    it('Expect to return difference in days if there are', () => {
      const startDate = new Date(2001, 1, 1)
      const endDate = new Date(2002, 2, 2)
      expect(compo.getTimeBetweenDates(startDate, endDate)).to.equal('394 Day Plural')
    })

    it('Expect to return difference in hours if there are', () => {
      const startDate = new Date(2001, 1, 1)
      const endDate = new Date(startDate.getTime() + 7200000)
      expect(compo.getTimeBetweenDates(startDate, endDate)).to.equal('2 Hour Plural')
    })

    it('Expect to return difference in minutes if there are', () => {
      const startDate = new Date(2001, 1, 1)
      const endDate = new Date(startDate.getTime() + 2000000)
      expect(compo.getTimeBetweenDates(startDate, endDate)).to.equal('33 Min Plural 20 Sec Plural')
    })

    it('Expect to return difference in seconds if there are', () => {
      const startDate = new Date(2001, 1, 1)
      const endDate = new Date(startDate.getTime() + 3000)
      expect(compo.getTimeBetweenDates(startDate, endDate)).to.equal('3 Sec Plural')
    })
  })
})
