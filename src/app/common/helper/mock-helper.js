/**
 * Mock Helper class
 * Generate random elements statics
 * Not of my work but quite good !
 */
export default class MockHelper {

  /**
   * Create a new MockHelper
   */
  constructor () {
    /** @type {string[]} A list of generic words */
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

    /** @type {string[]} A list of generic images source */
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

    /** @type {string[]} A list of countries' alpha code */
    this.countryCodes = ['HKG', 'HMD', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IMN',
    'IND', 'IOT', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JEY', 'JOR',
    'JPN', 'KAZ', 'KEN', 'KGZ', 'KHM', 'KIR', 'KNA']
  }

  /**
   * Generate a random sentence
   * @param  {string} wordcount The number of words in the sentence
   * @return {string}           The sentence generated
   */
  getRandomSentence (wordcount) {
    var words = []
    for (var i = 0; i < wordcount; i++) {
      words.push(this.getRandomWord())
    }
    return words.join(' ')
  }

  /**
   * Generate a random word
   * @return {string}  A random word
   */
  getRandomWord () {
    return this.words[this.getRandomInt(0, this.words.length - 1)]
  }

  /**
   * Generate a random number
   * @param  {integer} min The min value
   * @param  {integer} max The max value
   * @return {integer}     A random number
   */
  getRandomInt (min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
  }

  /**
   * Generate a random id, which is a number between 0 and 65536
   * @return {integer}  A random id
   */
  getRandomId () {
    return this.getRandomInt(0, 65536)
  }

  /**
   * Generate a random date
   * @param  {Date} min The min value
   * @param  {Date} max The max value
   * @return {Date}     A random Date
   */
  getRandomDate (min, max) {
    return new Date(Math.floor(Math.random() * (max.getTime() - min.getTime())) + min.getTime())
  }

  /**
   * Generate a random boolean
   * @return {Boolean}  A random boolean
   */
  getRandomBoolean () {
    return Math.random() > 0.5
  }

  /**
   * Generate a random mail adresse
   * @return {string}  A random mail
   */
  getRandomMail () {
    return `${this.getRandomWord()}@fake-luciole-fake.fr`
  }

  /**
   * Get a random img src
   * @return {string}  A random img src
   */
  getRandomImgSrc () {
    return this.imgSrc[this.getRandomInt(0, this.imgSrc.length - 1)]
  }

  /**
   * Get a random value in an array
   * @param  {Array} arr The array concerned
   * @return {Object}     A random object in array
   */
  getRandomValueInArray (arr) {
    if (arr.length > 0) {
      var i = Math.floor(Math.random() * arr.length)
      return arr[(i < arr.length) ? i : arr.length - 1]
    }
    return null
  }

  /**
   * Generate an array with random elements in it
   * @param  {integer} maxLength     The number max of items
   * @param  {Function} itemGenerator A function that return an object that will be generated
   * @return {Array}               An array with random elements in it
   */
  getRandomArray (maxLength, itemGenerator) {
    var result = []
    var length = this.getRandomInt(0, maxLength)
    for (var i = 0; i < length; i++) {
      result.push(itemGenerator(i))
    }
    return result
  }

  /**
   * Generate a random country alpha code
   * @return {string}  A random country alpha code
   */
  getRandomCountry () {
    return this.getRandomValueInArray(this.countryCodes)
  }
}
