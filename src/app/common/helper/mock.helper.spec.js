import MockHelper from './mock.helper'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)
chai.use(require('chai-datetime'))
let sinon = require('sinon')

describe('MockHelper', () => {
  let service, spy

  beforeEach(() => {
    service = new MockHelper()
  })

  describe('getRandomSentence', () => {
    it('Expect to return a string', () => {
      expect(typeof service.getRandomSentence(10)).to.equal('string')
    })

    it('Expect to have call getRandomWord ten times', () => {
      spy = chai.spy.on(service, 'getRandomWord')
      service.getRandomSentence(10)
      expect(spy).to.have.been.called.exactly(10)
    })
  })

  describe('getRandomWord', () => {
    it('Expect to return a string', () => {
      expect(typeof service.getRandomWord()).to.equal('string')
    })
    it('Expect to return a string in words list', () => {
      expect(service.words.indexOf(service.getRandomWord())).to.be.above(-1)
    })
  })

  describe('getRandomInt', () => {
    it('Expect to return an int', () => {
      expect(typeof service.getRandomInt(0, 100)).to.equal('number')
    })
    it('Expect to return a integer above min', () => {
      expect(service.getRandomInt(0, 100)).to.be.above(0)
    })
    it('Expect to return a integer under max', () => {
      expect(service.getRandomInt(0, 100)).to.be.below(100)
    })
  })

  describe('getRandomBoolean', () => {
    it('Expect to return a boolean', () => {
      expect(typeof service.getRandomBoolean()).to.equal('boolean')
    })
  })

  describe('getRandomMail', () => {
    it('Expect to return a string', () => {
      expect(typeof service.getRandomMail()).to.equal('string')
    })

    it('Expect to contain @fake-luciole-fake.fr', () => {
      expect(service.getRandomMail().indexOf('@fake-luciole-fake.fr')).to.be.above(-1)
    })
  })

  describe('getRandomImgSrc', () => {
    it('Expect to return a string', () => {
      expect(typeof service.getRandomImgSrc()).to.equal('string')
    })
    it('Expect to return a string in imgSrc list', () => {
      expect(service.imgSrc.indexOf(service.getRandomImgSrc())).to.be.above(-1)
    })
  })

  describe('getRandomId', () => {
    it('Expect to return an int', () => {
      expect(typeof service.getRandomId()).to.equal('number')
    })
    it('Expect to return a integer above 0', () => {
      expect(service.getRandomId()).to.be.above(0)
    })
    it('Expect to return a integer under 65536', () => {
      expect(service.getRandomId()).to.be.below(65536)
    })
  })

  describe('getRandomValueInArray', () => {
    it('Expect to return an element from array', () => {
      const array = ['a', 'b']
      expect(array.indexOf(service.getRandomValueInArray(array))).to.be.above(-1)
    })
    it('Expect to return "a"', () => {
      const array = ['a']
      expect(service.getRandomValueInArray(array)).to.equal('a')
    })
    it('Expect to return null if empty array', () => {
      const array = []
      expect(service.getRandomValueInArray(array)).to.equal(null)
    })
    it('Expect to return null if empty array', () => {
      const array = ['a']
      var mock = sinon.mock(Math)
      mock.expects('random').returns(4)
      expect(service.getRandomValueInArray(array)).to.equal('a')
      mock.restore()
    })
  })

  describe('getRandomArray', () => {
    const itemGenerator = {
      generator: () => { return 0 }
    }
    it('Expect to return an array', () => {
      expect(service.getRandomArray(10, itemGenerator.generator).constructor.name).to.equal('Array')
    })
    it('Expect to return an array of 0', () => {
      expect(service.getRandomArray(10, itemGenerator.generator)[0]).to.equal(0)
    })
    it('Expect to return an array with length to 10', () => {
      expect(service.getRandomArray(10, itemGenerator.generator).length).to.be.below(10)
    })
    it('Expect to have call itemGenerator max ten times', () => {
      spy = chai.spy.on(itemGenerator, 'generator')
      service.getRandomArray(10, itemGenerator.generator)
      expect(spy).to.have.been.called.max(10)
    })
  })

  describe('getRandomDate', () => {
    const begin = new Date('2000', '10', '10')
    const end = new Date('2100', '10', '10')
    it('Expect to return a date', () => {
      expect(service.getRandomDate(begin, end).constructor.name).to.equal('Date')
    })
    it('Expect to return date before end', () => {
      expect(service.getRandomDate(begin, end)).to.beforeDate(end)
    })
    it('Expect to return date after begin', () => {
      expect(service.getRandomDate(begin, end)).to.afterDate(begin)
    })
  })
})
