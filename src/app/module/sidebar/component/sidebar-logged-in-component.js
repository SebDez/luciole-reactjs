import React, { PropTypes } from 'react'
import SidebarLink from './sidebar-link-component'
import SidebarBlockResources from './sidebar-block-resources-component'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import FontAwesome from 'react-fontawesome'
import LuI18n from './../../../common/component/i18n/luciole-i18n-component'

/**
 * SidebarLoggedIn Component
 */
class SidebarLoggedIn extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const lang = this.props.lang
    return (
      <div>
        <SidebarLink text={'application.sidebar.home'} icon={'home'} link={'/'} lang={lang} />
        <SidebarLink text={'application.sidebar.kingdom'} icon={'flag'} link={'/'} lang={lang} />
        <div className='sidebar-content'>
          <SidebarBlockResources userResource={this.props.userResource} reloadResources={this.props.reloadResources} />
          <div className='sidebar-block-reload' onClick={this.props.reloadResources}><FontAwesome name='refresh' />
            <LuI18n value='application.sidebar.refresh' lang={this.props.lang} />
          </div>
        </div>
        <SidebarLink text={'application.sidebar.buildings'} icon={'cubes'} link={'/buildings'} lang={lang} />
        <SidebarLink text={'application.sidebar.specialists'} icon={'users'} link={'/'} lang={lang} />
        <SidebarLink text={'application.sidebar.stats'} icon={'line-chart'} link={'/'} lang={lang} />
        <SidebarLink text={'application.sidebar.forum'} icon={'bank'} link={'/'} lang={lang} />
        <SidebarLink text={'application.sidebar.contact'} icon={'envelope'} link={'/'} lang={lang} />
        <SidebarLink text={'application.sidebar.account'} icon={'user'} link={'/'} lang={lang} />
        <SidebarLink text={'application.sidebar.logout'} icon={'sign-out'} link={'/'} onClick={this.props.disconnectUser} lang={lang} />
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedIn.propTypes = {
  disconnectUser: PropTypes.func.isRequired,
  userResource: PropTypes.object.isRequired,
  reloadResources: PropTypes.func.isRequired,
  lang: PropTypes.string
}

/**
 * Export the component
 */
export default SidebarLoggedIn
