import {expect} from 'chai'
import UserLangService from './userlang-service'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('UserLangService', () => {
  describe('changeUserLang', () => {
    var serv, api
    beforeEach(() => {
      api = {
        changeUserLang: () => Promise.resolve()
      }
      serv = new UserLangService()
      serv.api = api
    })

    it('Expect to return a promise', () => {
      expect(serv.changeUserLang('fr')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call changeUserLang method', (done) => {
      let spy = chai.spy.on(api, 'changeUserLang')
      serv.changeUserLang('fr').then(() => {
        expect(spy).to.have.been.called.with('fr')
        done()
      })
    })
  })
})
