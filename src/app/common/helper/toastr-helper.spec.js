import ToastrHelper from './toastr-helper'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('ToastrHelper', () => {
  let service, spy

  beforeEach(() => {
    const toastrService = {
      success: () => 0,
      info: () => 0,
      warning: () => 0,
      error: () => 0,
      notmapped: () => 0
    }
    service = new ToastrHelper()
    service.toastrService = toastrService
  })

  describe('showMessage', () => {
    it('Expect to not call ', () => {
      spy = chai.spy.on(service.toastrService, 'notmapped')
      service.showMessage('notmapped', 'my-title', 'my-message', 'my-options')
      expect(spy).to.not.have.been.called.once
    })

    it('Expect to have call success method', () => {
      spy = chai.spy.on(service.toastrService, 'success')
      service.showMessage('success', 'my-title', 'my-message', null)
      expect(spy).to.have.been.called.once()
    })

    it('Expect to have call info method', () => {
      spy = chai.spy.on(service.toastrService, 'info')
      service.showMessage('info', 'my-title', 'my-message', null)
      expect(spy).to.have.been.called.once()
    })

    it('Expect to have call warning method', () => {
      spy = chai.spy.on(service.toastrService, 'warning')
      service.showMessage('warning', 'my-title', 'my-message', null)
      expect(spy).to.have.been.called.once()
    })

    it('Expect to have call error method', () => {
      spy = chai.spy.on(service.toastrService, 'error')
      service.showMessage('error', 'my-title', 'my-message', null)
      expect(spy).to.have.been.called.once()
    })
  })
})
