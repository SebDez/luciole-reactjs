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
    return dateToConvert.toLocaleDateString()
  }

  /**
   * Convert a gendercode to string
   * @param  {string} genderCode The gendercode to convert
   * @return {string}           The gender string
   */
  genderToString (genderCode) {
    return this.i18n.t(Constants.USER.GENDER[genderCode])
  }

  /**
   * Convert a citycode to string
   * @param  {string} city The citycode to convert
   * @return {string}           The city string
   */
  cityToString (city) {
    return city
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
