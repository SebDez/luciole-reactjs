import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LuciolePageHeader from './../../../common/component/page-header/page-header-component'
import { Grid } from 'react-bootstrap'
import ResourcesComponent from './../component/resources-component'

/**
 * KingdomPage container, used to define the composition of the KingdomPage screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const KingdomPage = (props) => {
  return (
    <div>
      <Grid className='lu-grid kingdompage'>
        <LuciolePageHeader title='application.sidebar.kingdom' icon='flag' />
        <div>
          <ResourcesComponent lang={props.currentLang} resources={props.userResource} />
        </div>
      </Grid>
    </div>
  )
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {
    currentLang: state.i18n.locale,
    userResource: state.application.module.sidebar.userResource
  }
}

/**
 * Maps the dispatch to props (to allow to execute action creator)
 * @param  {Object} dispatch The global dispatch
 * @return {Object}       The container props
 */
function mapDispatchToProps (dispatch) {
  return {}
}

/**
 * The container properties' types
 * @type {Object}
 */
KingdomPage.propTypes = {
  currentLang: PropTypes.string,
  userResource: PropTypes.object.isRequired
}

KingdomPage.mapStateToProps = mapStateToProps
KingdomPage.mapDispatchToProps = mapDispatchToProps

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KingdomPage)
