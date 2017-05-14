import RestHelper from './rest-helper'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('RestHelper', () => {
  let service, spy

  beforeEach(() => {
    const toastrHelper = {
      showMessage: () => 0
    }
    const i18n = {
      t: a => a
    }
    service = new RestHelper()
    service.toastrHelper = toastrHelper
    service.i18n = i18n
  })

  describe('manageErrors', () => {
    it('Expect to call toastrHelper showMessage with good type param, case 401', () => {
      spy = chai.spy.on(service.toastrHelper, 'showMessage')
      service.manageErrors({response: {status: 401}})
      const expected = ['warning', 'httpErrors.401.title', 'httpErrors.401.message', null]
      expect(spy).to.have.been.called.with(...expected)
    })

    it('Expect to call toastrHelper showMessage with good type param, case 403', () => {
      spy = chai.spy.on(service.toastrHelper, 'showMessage')
      service.manageErrors({response: {status: 403}})
      const expected = ['warning', 'httpErrors.403.title', 'httpErrors.403.message', null]
      expect(spy).to.have.been.called.with(...expected)
    })

    it('Expect to call toastrHelper showMessage with good type param, case 500', () => {
      spy = chai.spy.on(service.toastrHelper, 'showMessage')
      service.manageErrors({response: {status: 500}})
      const expected = ['error', 'httpErrors.500.title', 'httpErrors.500.message', null]
      expect(spy).to.have.been.called.with(...expected)
    })

    it('Expect to call toastrHelper showMessage with good type param, case other', () => {
      spy = chai.spy.on(service.toastrHelper, 'showMessage')
      service.manageErrors({response: {status: '62fdfother'}})
      const expected = ['error', 'httpErrors.other.title', 'httpErrors.other.message', null]
      expect(spy).to.have.been.called.with(...expected)
    })

    it('Expect to call toastrHelper showMessage with good type param, case no response', () => {
      spy = chai.spy.on(service.toastrHelper, 'showMessage')
      service.manageErrors({})
      const expected = ['error', 'httpErrors.other.title', 'httpErrors.other.message', null]
      expect(spy).to.have.been.called.with(...expected)
    })

    it('Expect to call toastrHelper showMessage with good type param, case no status', () => {
      spy = chai.spy.on(service.toastrHelper, 'showMessage')
      service.manageErrors({response: null})
      const expected = ['error', 'httpErrors.other.title', 'httpErrors.other.message', null]
      expect(spy).to.have.been.called.with(...expected)
    })
  })
})
