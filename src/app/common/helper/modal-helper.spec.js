import ModalHelper from './modal-helper'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('ModalHelper', () => {
  let service, spy

  beforeEach(() => {
    const modalService = {
      add: () => 0
    }
    service = new ModalHelper()
    service.modalService = modalService
  })

  describe('openModal', () => {
    it('Expect to have call add method with default params', () => {
      spy = chai.spy.on(service.modalService, 'add')
      service.openModal('my-component')
      expect(spy).to.have.been.called.with(service.defaultOptions)
    })
    it('Expect to have call add method with good params', () => {
      spy = chai.spy.on(service.modalService, 'add')
      service.openModal('my-component', {title: 'my super params'})
      const expected = service.defaultOptions
      expected.title = 'my super params'
      expect(spy).to.have.been.called.with(expected)
    })
  })
})
