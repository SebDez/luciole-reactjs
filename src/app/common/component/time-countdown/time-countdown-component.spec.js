import {shallow} from 'enzyme'
import {expect} from 'chai'
import LuTimeCountDown from './time-countdown-component'
import LuProgressBar from './../progress-bar/progress-bar-component'

let sinon = require('sinon')

describe('LuTimeCountDown', () => {
  describe('render', () => {
    let compo = null
    let clock

    beforeEach(() => {
      const props = {
        lang: 'fr',
        beginDate: new Date(2000, 1, 1).toISOString(),
        endDate: new Date(2000, 1, 3).toISOString()
      }
      compo = new LuTimeCountDown(props)
      clock = sinon.useFakeTimers(new Date(2000, 1, 2).getTime())
    })

    afterEach(() => {
      clock.restore()
    })

    it('Expect to contain one LuProgressBar with good props', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(LuProgressBar).findWhere(n => {
        return n.prop('lang') === 'fr' &&
        n.prop('initialValue') === 86400000 &&
        n.prop('goalValue') === 172800000 &&
        n.prop('counter') === compo.counter &&
        n.prop('withDates') === true &&
        n.prop('active') === true
      })
      expect(actual).to.have.length(1)
    })
  })

  describe('counter', () => {
    let compo = null

    beforeEach(() => {
      const props = {}
      compo = new LuTimeCountDown(props)
    })

    it('Expect to return a good value', () => {
      expect(compo.counter(0)).to.equals(1000)
    })
  })
})
