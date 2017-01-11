import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuI18n from './../../../common/component/i18n/luciole-i18n-component'

/**
 * HomePageLoggedIn Component
 */
class HomePageLoggedIn extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        xxxx
        <br />
        HomePageLoggedIn
        <br />
        Content when user is logged in
        <br />
        <LuI18n value='application.homePage.linkTo' lang={this.props.lang} />
        xxxx
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
HomePageLoggedIn.propTypes = {
  lang: PropTypes.string
}

/**
 * Export the component
 */
export default HomePageLoggedIn
