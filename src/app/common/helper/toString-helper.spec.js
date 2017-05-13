import ToStringHelper from './toString-helper'
import MockI18n from './../../../test/mock/mock-i18n'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)
chai.use(require('chai-datetime'))

describe('ToStringHelper', () => {
  let service, spy

  beforeEach(() => {
    service = new ToStringHelper()
    service.i18n = new MockI18n()
  })

  describe('genderToString', () => {
    it('Expect to return a string', () => {
      expect(typeof service.genderToString(1)).to.equal('string')
    })

    it('Expect to have call i18n.t', () => {
      spy = chai.spy.on(service.i18n, 't')
      service.genderToString(1)
      expect(spy).to.have.been.called.once
    })
  })

  describe('cityToString', () => {
    it('Expect to return a string', () => {
      expect(typeof service.cityToString('mycity')).to.equal('string')
    })

    it('Expect to return entered param', () => {
      expect(service.cityToString('mycity')).to.equal('mycity')
    })
  })

  describe('countryToString', () => {
    it('Expect to return a string', () => {
      expect(typeof service.countryToString('mycountry')).to.equal('string')
    })

    it('Expect to return entered param', () => {
      expect(service.countryToString('mycountry')).to.equal('mycountry')
    })
  })

  describe('dateToString', () => {
    it('Expect to return a string', () => {
      expect(typeof service.dateToString(new Date())).to.equal('string')
    })

    it('Expect to have call date toLocaleDateString', () => {
      const mydate = new Date()
      spy = chai.spy.on(mydate, 'toLocaleDateString')
      service.dateToString(mydate)
      expect(spy).to.have.been.called.once
    })
  })
})
