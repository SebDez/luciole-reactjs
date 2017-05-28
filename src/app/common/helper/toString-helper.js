import Constants from './../constants'
import { I18n } from 'react-redux-i18n'

/**
 * ToString Helper class
 * Used to print things into text
 */
export default class ToStringHelper {

  /**
   * Create a new ToStringHelper
   */
  constructor () {
    /** @type {I18n}*/
    this.i18n = I18n
  }

/**
 * Convert a date to luciole date string
 * @param  {Date} dateToConvert The date to convert
 * @return {string}           The luciole date string
 */
  dateToString (dateToConvert) {
    if (dateToConvert && dateToConvert.toLocaleDateString) {
      return dateToConvert.toLocaleDateString()
    }
    return null
  }

  /**
   * Convert a gendercode to string
   * @param  {string} genderCode The gendercode to convert
   * @return {string}           The gender string
   */
  genderToString (genderCode) {
    return Constants.USER.GENDER[genderCode] ? this.i18n.t(Constants.USER.GENDER[genderCode]) : null
  }

  /**
   * Convert a region code to string
   * @param  {string} region The region code to convert
   * @return {string}           The region string
   */
  regionToString (region) {
    return region
  }

  /**
   * Convert a countrycode to string
   * @param  {string} countrycode The countrycode to convert
   * @return {string}           The country string
   */
  countryToString (countrycode) {
    return countrycode
  }
}
