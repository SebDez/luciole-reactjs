import SidebarActions from './sidebar.action'
import ResourceService from './../service/resource.service'
import TestHelper from './../../../../test/mock/test.helper'

require('sinon-as-promised')
let chai = require('chai')
let sinon = require('sinon')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('SidebarActions', () => {
  let actions

  beforeEach(() => {
    actions = new SidebarActions()
  })

  describe('getUserResourceSuccessAction', () => {
    it('Expect to return GET_RESOURCES_SUCCESS as action type', () => {
      expect(actions.getUserResourceSuccessAction('my-resources').type).to.equal('GET_RESOURCES_SUCCESS')
    })
    it('Expect to return the given user as action param', () => {
      expect(actions.getUserResourceSuccessAction('my-resources').resources).to.equal('my-resources')
    })
  })

  describe('closeSidebarAction', () => {
    it('Expect to return CLOSE_SIDEBAR as action type', () => {
      expect(actions.closeSidebarAction().type).to.equal('CLOSE_SIDEBAR')
    })
  })

  describe('openSidebarAction', () => {
    it('Expect to return OPEN_SIDEBAR as action type', () => {
      expect(actions.openSidebarAction().type).to.equal('OPEN_SIDEBAR')
    })
  })

  describe('getUserResources', () => {
    let mockService, mockActions, service, spy
    const data = {
      data: 'my-resources'
    }

    beforeEach(() => {
      service = new ResourceService()
      mockService = sinon.mock(service)
      actions.resourceService = service
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mockService.verify()
      mockService.restore()
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to return a function', () => {
      expect(typeof (actions.getUserResources())).to.equal('function')
    })

    it('Expect to have call getUserResources with good params', (done) => {
      mockService.expects('getUserResources').resolves(data)
      mockActions.expects('getUserResourceSuccessAction').returns('getUserResourceSuccessAction-result')
      spy = chai.spy.on(actions.resourceService, 'getUserResources')
      actions.getUserResources()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.once()
        done()
      })
    })

    it('Expect to have call dispatch with good params in case of success', (done) => {
      mockService.expects('getUserResources').resolves(data)
      mockActions.expects('getUserResourceSuccessAction').returns('getUserResourceSuccessAction-result')
      spy = chai.spy.on(TestHelper, 'dispatch')
      actions.getUserResources()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('getUserResourceSuccessAction-result')
        done()
      })
    })

    it('Expect to have call getUserResourceSuccessAction with good params in case of success', (done) => {
      mockService.expects('getUserResources').resolves(data)
      mockActions.expects('getUserResourceSuccessAction').returns('getUserResourceSuccessAction-result')
      spy = chai.spy.on(actions, 'getUserResourceSuccessAction')
      actions.getUserResources()(TestHelper.dispatch).then(() => {
        expect(spy).to.have.been.called.with('my-resources')
        done()
      })
    })
  })

  describe('manageSidebar', () => {
    let mockActions, spy

    beforeEach(() => {
      mockActions = sinon.mock(actions)
    })

    afterEach(() => {
      mockActions.verify()
      mockActions.restore()
    })

    it('Expect to have call closeSidebarAction if sidebar is open', () => {
      mockActions.expects('closeSidebarAction').returns(0)
      spy = chai.spy.on(actions, 'closeSidebarAction')
      actions.manageSidebar(true)
      expect(spy).to.have.been.called.once()
    })

    it('Expect to have call closeSidebarAction if sidebar is close', () => {
      mockActions.expects('openSidebarAction').returns(0)
      spy = chai.spy.on(actions, 'openSidebarAction')
      actions.manageSidebar(false)
      expect(spy).to.have.been.called.once()
    })
  })
})
