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

    this.imgSrc = [
      'http://68.media.tumblr.com/tumblr_mdj13ty0p91r4nmedo2_1280.jpg',
      'http://68.media.tumblr.com/tumblr_mdj13ty0p91r4nmedo3_1280.jpg',
      'http://68.media.tumblr.com/tumblr_mdj13ty0p91r4nmedo4_1280.jpg',
      'http://68.media.tumblr.com/tumblr_mdj13ty0p91r4nmedo5_1280.jpg',
      'http://68.media.tumblr.com/tumblr_mdj13ty0p91r4nmedo6_1280.jpg',
      'http://68.media.tumblr.com/tumblr_mdj13ty0p91r4nmedo1_1280.jpg',
      'http://orig06.deviantart.net/7d36/f/2012/324/2/1/2136c09679bbaa843bde06359892acfc-d5llwh4.jpg',
      'http://orig04.deviantart.net/35f6/f/2012/006/5/4/5457bef4adf75f5386303933f9b1055b-d4lgqqu.jpg',
      'http://orig02.deviantart.net/ae75/f/2012/317/3/f/3f082c662369f1b044e5b8aac27ff55d-d5kwivn.jpg',
      'http://orig15.deviantart.net/c489/f/2012/314/d/5/d5696220639bb2f0d7524c06466def46-d5kjarn.jpg'
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

  getRandomImgSrc () {
    return this.imgSrc[this.getRandomInt(0, this.imgSrc.length - 1)]
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
