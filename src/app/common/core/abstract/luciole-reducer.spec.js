import {expect} from 'chai'
import LucioleReducer from './luciole-reducer'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('LucioleReducer', () => {
  describe('registerAction', () => {
    it('Expect to register an new action', () => {
      const reducer = new LucioleReducer()
      reducer.registerAction('my-action', 'my-action-callback')
      expect(reducer.handleActions['my-action']).to.equal('my-action-callback')
    })
  })

  describe('handleAction', () => {
    let reducer, mycb

    beforeEach(() => {
      reducer = new LucioleReducer()
      mycb = () => {
        return 'my-action-result'
      }
      reducer.registerAction('my-action', mycb)
    })

    it('Expect to have call the right callback', () => {
      let spy = chai.spy.on(reducer.handleActions, 'my-action')
      reducer.handleAction('my-action', 'mystate', 'mydata')
      expect(spy).to.have.been.called.with('mystate', 'mydata')
    })

    it('Expect to return the callback result', () => {
      expect(reducer.handleAction('my-action', 'mystate', 'mydata')).to.equal('my-action-result')
    })
  })

  describe('isActionTypeRegistered', () => {
    let reducer, mycb

    beforeEach(() => {
      reducer = new LucioleReducer()
      mycb = () => {
        return 'my-action-result'
      }
      reducer.registerAction('my-action', mycb)
    })

    it('Expect to return true if action type is registered', () => {
      expect(reducer.isActionTypeRegistered('my-action')).to.equal(true)
    })

    it('Expect to return false if action type is not registered', () => {
      expect(reducer.isActionTypeRegistered('not-registered')).to.equal(false)
    })
  })

  describe('reduce', () => {
    let reducer, mycb, action

    beforeEach(() => {
      reducer = new LucioleReducer()
      reducer.initialState = 'initialState'
      mycb = () => {
        return 'my-action-result'
      }
      reducer.registerAction('my-action', mycb)
    })

    it('Expect to return the action callback result if actiontype is registered', () => {
      action = {
        type: 'my-action'
      }
      expect(reducer.reduce('mystate', action)).to.equal('my-action-result')
    })

    it('Expect to call handleAction with good params if actiontype is registered', () => {
      action = {
        type: 'my-action'
      }
      let spy = chai.spy.on(reducer, 'handleAction')
      reducer.reduce('mystate', action)
      expect(spy).to.have.been.called.with('my-action', 'mystate', action)
    })

    it('Expect to return the givenstate if actiontype is not registered and state given', () => {
      action = {
        type: 'not-registered'
      }
      expect(reducer.reduce('mystate', action)).to.equal('mystate')
    })

    it('Expect to return the initialState if actiontype is not registered and state not given', () => {
      action = {
        type: 'not-registered'
      }
      expect(reducer.reduce(null, action)).to.equal('initialState')
    })
  })
})
