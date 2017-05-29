import ToStringHelper from './toString-helper'
import MockI18n from './../../../test/mock/mock-i18n'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)
chai.use(require('chai-datetime'))
let sinon = require('sinon')

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
    let mock

    beforeEach(() => {
      mock = sinon.mock(service)
    })

    afterEach(() => {
      mock.verify()
      mock.restore()
    })

    it('Expect to return a string', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(['mc', 'mycountry', 'reg1~code1|reg2~code2|reg3~code3'])
      expect(typeof service.regionToString('code2', 'mycountry')).to.equal('string')
    })

    it('Expect to return null if there is no country', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(null)
      expect(service.regionToString('code2', 'mycountry')).to.equal(null)
    })

    it('Expect to return null if there is no country', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(['res1', 'res2'])
      expect(service.regionToString('code2', 'mycountry')).to.equal(null)
    })

    it('Expect to return the region code', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(['mc', 'mycountry', 'reg1~code1|reg2~code2|reg3~code3'])
      expect(service.regionToString('code2', 'mycountry')).to.equal('reg2')
    })

    it('Expect to return null is no region found', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(['mc', 'mycountry', 'reg1~code1|reg2~code2|reg3~code3'])
      expect(service.regionToString('code23', 'mycountry')).to.equal(null)
    })

    it('Expect to return null is no region name', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(['mc', 'mycountry', 'reg1~code1|code2|reg3~code3'])
      expect(service.regionToString('code2', 'mycountry')).to.equal(null)
    })
  })

  describe('countryToString', () => {
    let mock

    beforeEach(() => {
      mock = sinon.mock(service)
    })

    afterEach(() => {
      mock.verify()
      mock.restore()
    })

    it('Expect to return a string if countrycode if valid', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(['mycountry'])
      expect(typeof service.countryToString('mycountry')).to.equal('string')
    })

    it('Expect to return null if no country name found', () => {
      mock.expects('getCountryArrayFromCountryCode').returns([])
      expect(service.countryToString('mycountry')).to.equal(null)
    })

    it('Expect to return null if no country', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(null)
      expect(service.countryToString('mycountry')).to.equal(null)
    })

    it('Expect to return the country name found', () => {
      mock.expects('getCountryArrayFromCountryCode').returns(['mycountry'])
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

  describe('getCountryArrayFromCountryCode', () => {
    it('Expect to return an array of 3', () => {
      expect(service.getCountryArrayFromCountryCode('FR').length).to.equal(3)
    })

    it('Expect to return undefined if no countey found', () => {
      expect(service.getCountryArrayFromCountryCode('unknown')).to.equal(void (0))
    })

    it('Expect to return the country name from alphacode', () => {
      expect(service.getCountryArrayFromCountryCode('FR')[0]).to.equal('France')
    })
  })
})
