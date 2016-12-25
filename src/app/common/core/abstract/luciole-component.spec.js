import {expect} from 'chai'
import LucioleComponent from './luciole-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('LucioleComponent', () => {
  describe('render', () => {
    it('Expect to contain nothing', () => {
      const compo = new LucioleComponent()
      expect(compo.render()).to.be.equal(null)
    })
  })

  describe('_bindThisToMethods', () => {
    const testMethod = () => { return 0 }
    const testMethodSecond = () => { return 0 }
    it('Expect to bind method testMethod to component', () => {
      const compo = new LucioleComponent()
      compo.testMethod = testMethod
      let spy = chai.spy.on(compo.testMethod, 'bind')
      compo._bindThisToMethods('testMethod')
      expect(spy).to.have.been.called.with(compo)
    })

    it('Expect to bind method with several params', () => {
      const compo = new LucioleComponent()
      compo.testMethod = testMethod
      compo.testMethodSecond = testMethodSecond
      let spy = chai.spy.on(compo.testMethodSecond, 'bind')
      compo._bindThisToMethods('testMethod', 'testMethodSecond')
      expect(spy).to.have.been.called.with(compo)
    })
  })
})
