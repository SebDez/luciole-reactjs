import ResourceService from './resource.service'
import MockResourceService from './../../../../test/mock/mock.resource.service'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('ResourceService', () => {
  let service, api, spy

  beforeEach(() => {
    service = new ResourceService()
    api = new MockResourceService()
    service.api = api
  })

  describe('getUserResources', () => {
    it('Expect to have call api getUserResources', (done) => {
      spy = chai.spy.on(service.api, 'getUserResources')
      service.getUserResources().then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })
  })
})
