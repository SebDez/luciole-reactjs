import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * HomePageLoggedIn Component
 */
class HomePageLoggedIn extends React.Component {

  /**
   * Create a new HomePageLoggedIn component
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
        HomePageLoggedIn
        <br />
        Content when user is logged in
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
HomePageLoggedIn.propTypes = {}

/**
 * Export the component
 */
export default HomePageLoggedIn
