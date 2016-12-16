// import React from 'react'
// import { shallow } from 'enzyme'
import { expect } from 'chai'
import { App } from './app.container'

describe('App', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(App.mapDispatchToProps().actions).to.be.empty
    })
  })
})
