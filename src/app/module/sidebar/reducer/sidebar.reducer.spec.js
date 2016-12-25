import {expect} from 'chai'
import * as SidebarReducer from './sidebar-reducer'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('SidebarReducer', () => {
  let state, action

  beforeEach(() => {
    state = {
      state: 'default-state-value',
      open: null
    }
  })

  describe('openSidebarAction', () => {
    it('Expect to return a valid state', () => {
      const result = SidebarReducer.openSidebarAction(state)
      const expected = {
        state: 'default-state-value',
        open: true
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('closeSidebarAction', () => {
    it('Expect to return a valid state', () => {
      const result = SidebarReducer.closeSidebarAction(state)
      const expected = {
        state: 'default-state-value',
        open: false
      }
      expect(result).to.deep.equal(expected)
    })
  })

  describe('getResourceSuccessAction', () => {
    it('Expect to return a valid state', () => {
      action = {
        resources: 'new-resources'
      }
      state.userResource = null
      const result = SidebarReducer.getResourceSuccessAction(state, action)
      const expected = {
        state: 'default-state-value',
        open: null,
        userResource: 'new-resources'
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
