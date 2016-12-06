import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSVG from 'react-svg'

/**
 * LucioleSVG Component
 */
class LucioleSVG extends React.Component {

  /**
   * Create a new LucioleSVG component
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
        <ReactSVG
          path={this.props.path}
          className={this.props.class}
          callback={this.props.callback}
        />
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
LucioleSVG.propTypes = {
  path: PropTypes.string.isRequired,
  class: PropTypes.string,
  callback: PropTypes.func
}

/**
 * Export the component
 */
export default LucioleSVG
