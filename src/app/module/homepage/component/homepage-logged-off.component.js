import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * HomePageLoggedOff Component
 */
class HomePageLoggedOff extends React.Component {

  /**
   * Create a new HomePageLoggedOff component
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
        xxxx
        <br />
        HomePageLoggedOff
        <br />
        Content when user is logged off
        <br />
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
