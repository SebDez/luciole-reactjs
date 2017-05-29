import Constants from './../constants'
import { I18n } from 'react-redux-i18n'
import { CountryRegionData } from 'react-country-region-selector'

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
   * @param  {string} regionCode The region code to convert
   * @param  {string} countrycode The countrycode of the region to convert
   * @return {string}           The region string
   */
  regionToString (regionCode, countrycode) {
    const country = this.getCountryArrayFromCountryCode(countrycode)
    if (country && country.length === 3) {
      const regions = country[2].split('|').map(region => region.split('~'))
      const region = regions.filter(r => r[1] === regionCode)
      return region[0] && region[0][0] ? region[0][0] : null
    }
    return null
  }

  /**
   * Convert a countrycode to string
   * @param  {string} countrycode The countrycode to convert
   * @return {string}           The country string
   */
  countryToString (countrycode) {
    const country = this.getCountryArrayFromCountryCode(countrycode)
    return country && country[0] ? country[0] : null
  }

  /**
   * Get the country data from src and countrycode
   * @param  {string} countrycode The code of the country concerned
   * @return {Array}           The country'es properties array
   */
  getCountryArrayFromCountryCode (countrycode) {
    return CountryRegionData.filter(c => c[1] === countrycode)[0]
  }
}
