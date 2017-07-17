import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { KingdomPage } from './kingdompage-container'
import { Grid } from 'react-bootstrap'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('KingdomPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(KingdomPage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    it('Expect to return empty object', () => {
      expect(KingdomPage.mapStateToProps()).to.be.empty
    })
  })

  describe('render', () => {
    const props = {}

    it('Expect to contain a Grid', () => {
      const wrapper = shallow(<KingdomPage {...props} />)
      const actual = wrapper.find(Grid)
      expect(actual).to.have.length(1)
    })
  })
})
