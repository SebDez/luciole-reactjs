import React, { PropTypes } from 'react'
import SidebarLink from './sidebar-link.component'
import SidebarBlockResources from './sidebar-block-resources.component'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import FontAwesome from 'react-fontawesome'

/**
 * SidebarLoggedIn Component
 */
class SidebarLoggedIn extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <SidebarLink text={'Accueil'} icon={'home'} link={'/'} />
        <SidebarLink text={'Mon Royaume'} icon={'flag'} link={'/'} />
        <div className='sidebar-content'>
          <SidebarBlockResources userResource={this.props.userResource} reloadResources={this.props.reloadResources} />
          <div className='sidebar-block-reload' onClick={this.props.reloadResources}><FontAwesome name='refresh' /> Rafraichir</div>
        </div>
        <SidebarLink text={'Bâtiments'} icon={'cubes'} link={'/buildings'} />
        <SidebarLink text={'Spécialistes'} icon={'users'} link={'/'} />
        <SidebarLink text={'Statistiques'} icon={'line-chart'} link={'/'} />
        <SidebarLink text={'Forum'} icon={'bank'} link={'/'} />
        <SidebarLink text={'Contact'} icon={'envelope'} link={'/'} />
        <SidebarLink text={'Mon compte'} icon={'user'} link={'/'} />
        <SidebarLink text={'Me déconnecter'} icon={'sign-out'} link={'/'} onClick={this.props.disconnectUser} />
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
  reloadResources: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default SidebarLoggedIn
