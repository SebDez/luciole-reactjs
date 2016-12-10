/**
 * Mock Helper class
 * Generate random elements statics
 * Not of my work but quite good !
 */
export default class MockHelper {

  constructor () {
    this.words = [
      'ungrappling',
      'zephyrian',
      'prescriptivism',
      'fescue',
      'carbonylic',
      'swore',
      'disintegrative',
      'lionizing',
      'abettor',
      'unprescient',
      'lobber',
      'potemkin',
      'purusha',
      'cuing',
      'outsliding',
      'dynamoelectric',
      'milligal',
      'acquaintance',
      'locatable',
      'discobolos',
      'digs',
      'rhodesian',
      'guiana',
      'inwinding',
      'wholly',
      'reeligibility',
      'preconformity',
      'culottes',
      'misleader',
      'nosogeny',
      'proabolitionist',
      'chutist',
      'hygrostat',
      'dharana',
      'beardless',
      'meal',
      'unpeaceful',
      'preconsent',
      'undoctrined',
      'iroquoian',
      'idyll',
      'cabala',
      'outbreathing',
      'sniveler',
      'preposition',
      'africa',
      'apostrophising',
      'bumboatman',
      'perikeiromene',
      'overassumptive',
      'eonism',
      'significance',
      'introgression',
      'yeast'
    ]
  }

  getRandomSentence (wordcount) {
    var words = []
    for (var i = 0; i < wordcount; i++) {
      words.push(this.getRandomWord())
    }
    return words.join(' ')
  }

  getRandomWord () {
    return this.words[this.getRandomInt(0, this.words.length - 1)]
  }

  getRandomInt (min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
  }

  getRandomId () {
    return this.getRandomInt(0, 65536)
  }

  getRandomDate (min, max) {
    return new Date(Math.floor(Math.random() * (max.getTime() - min.getTime())) + min.getTime())
  }

  getRandomBoolean () {
    return Math.random() > 0.5
  }

  getRandomMail () {
    return `${this.getRandomWord()}@fake-luciole-fake.fr`
  }

  getRandomValueInArray (arr) {
    if (arr.length > 0) {
      var i = Math.floor(Math.random() * arr.length)
      return arr[(i < arr.length) ? i : arr.length]
    }
  }

  getRandomArray (maxLength, itemGenerator) {
    var result = []
    var length = this.getRandomInt(0, maxLength)
    for (var i = 0; i < length; i++) {
      result.push(itemGenerator(i))
    }
    return result
  }
}
