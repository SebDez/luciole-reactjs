import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

/**
 * MainPageUserCard Component
 */
class MainPageUserCard extends React.Component {

  /**
   * Create a new MainPageUserCard component
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
      <div className='hand-over main-user-card'>
        A PSEUDO
        POINTS
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
MainPageUserCard.propTypes = {}

/**
 * Export the component
 */
export default MainPageUserCard
