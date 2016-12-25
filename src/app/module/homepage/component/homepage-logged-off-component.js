import React from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuI18n from './../../../common/component/i18n/luciole-i18n-component'

/**
 * HomePageLoggedOff Component
 */
class HomePageLoggedOff extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        xxxx
        <br />
        HomePageLoggedOff
        <br />
        Content when user is logged off
        <br />
        <LuI18n value='application.homePage.linkTo' />
        xxxx
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
HomePageLoggedOff.propTypes = {}

/**
 * Export the component
 */
export default HomePageLoggedOff
