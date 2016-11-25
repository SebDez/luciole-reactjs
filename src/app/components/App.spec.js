// import React from 'react'
// import { shallow } from 'enzyme'
import { expect } from 'chai'
import { App } from './App'

describe('App', () => {
  describe('mapDispatchToProps', () => {
    it('Should return empty object', () => {
      expect(App.mapDispatchToProps().actions).to.be.empty
    })
  })
})
