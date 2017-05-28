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
    it('Expect to return a string if gender exist', () => {
      expect(typeof service.genderToString(1)).to.equal('string')
    })

    it('Expect to have call i18n.t if gender exist', () => {
      spy = chai.spy.on(service.i18n, 't')
      service.genderToString(1)
      expect(spy).to.have.been.called.once
    })

    it('Expect to return null if gender not exist', () => {
      expect(service.genderToString(23)).to.equal(null)
    })

    it('Expect to not call i18n.t if gender not exist', () => {
      spy = chai.spy.on(service.i18n, 't')
      service.genderToString(23)
      expect(spy).not.to.have.been.called
    })
  })

  describe('regionToString', () => {
    it('Expect to return a string', () => {
      expect(typeof service.regionToString('myregion')).to.equal('string')
    })

    it('Expect to return entered param', () => {
      expect(service.regionToString('myregion')).to.equal('myregion')
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

    it('Expect to return null if no date given', () => {
      expect(service.dateToString(null)).to.equal(null)
    })

    it('Expect to return null if given date is not a date', () => {
      expect(service.dateToString('notadate')).to.equal(null)
    })
  })
})
