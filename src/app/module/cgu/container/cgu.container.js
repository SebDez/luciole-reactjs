import React from 'react'
import { connect } from 'react-redux'
import WorkInProgress from './../../../common/component/wip/wip.component'

/**
 * CGUPage container, used to define the composition of the CGUPage screen
 * This function will render the container
 * @param  {Object} props The container properties
 * @return {Object} React component tree
 */
export const CGUPage = (props) => {
  return (
    <div>
      CGU
      <WorkInProgress />
    </div>
  )
}

/**
 * Map the global state into props
 * @param  {Object} state The global state
 * @return {Object}       The container props
 */
function mapStateToProps (state) {
  return {}
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
CGUPage.propTypes = {}

CGUPage.mapStateToProps = mapStateToProps
CGUPage.mapDispatchToProps = mapDispatchToProps

/**
 * Connect the component to access global state object
 * @param  {Function} mapStateToProps    Function to map state to props
 * @param  {Function} mapDispatchToProps Function to map dispatch to props
 * @return {Object}                    The container component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CGUPage)
