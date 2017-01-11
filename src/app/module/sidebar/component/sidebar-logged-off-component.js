import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import LuI18n from './../../../common/component/i18n/luciole-i18n-component'

/**
 * SidebarLoggedOff Component
 */
export class SidebarLoggedOff extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <div className='sidebar-content off'>
          <div className='sidebar-button' onClick={this.props.logUserIn}>
            <LuI18n value='application.sidebar.play' lang={this.props.lang} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedOff.propTypes = {
  logUserIn: PropTypes.func.isRequired,
  lang: PropTypes.string
}

/**
 * Export the component
 */
export default SidebarLoggedOff
