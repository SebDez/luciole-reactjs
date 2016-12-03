import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Button} from 'react-bootstrap'
import SidebarLink from './sidebar-link.component'

/**
 * SidebarLoggedIn Component
 */
class SidebarLoggedIn extends React.Component {

  /**
   * Create a new SidebarLoggedIn component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  constructor (props, context) {
    super(props, context)
    /** @type {Object}*/
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div>
        <SidebarLink text={'Accueil'} icon={'home'} link={'/about'} />
        <SidebarLink text={'Mon Royaume'} icon={'flag'} link={'/cgu'} />
        <div className='sidebar-content'>
          ----
          <br />
          SidebarLoggedIn
          <br />
          Content when user is logged in
          <br />
          ----
          <Button bsStyle='warning' onClick={this.props.disconnectUser}> DISCONNECT</Button>
        </div>
        <SidebarLink text={'Bâtiments'} icon={'cubes'} link={'/contact'} />
        <SidebarLink text={'Spécialistes'} icon={'users'} link={'/about'} />
        <SidebarLink text={'Statistiques'} icon={'line-chart'} link={'/about'} />
        <SidebarLink text={'Forum'} icon={'bank'} link={'/about'} />
        <SidebarLink text={'Contact'} icon={'envelope'} link={'/about'} />
        <SidebarLink text={'Mon compte'} icon={'user'} link={'/about'} />
        <SidebarLink text={'Me déconnecter'} icon={'sign-out'} link={'/about'} />
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
SidebarLoggedIn.propTypes = {
  disconnectUser: PropTypes.func.isRequired
}

/**
 * Export the component
 */
export default SidebarLoggedIn
