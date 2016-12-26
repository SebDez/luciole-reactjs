import React from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'

/**
 * MainLangMenu Component
 */
class MainLangMenu extends LucioleComponent {

  /**
   * Create a new MainLangMenu component
   * @param  {Object} props The component properties
   * @param  {Object} context The app context
   */
  /* istanbul ignore next */
  constructor (props, context) {
    super(props, context)

    this.value = ''
  }

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    return (
      <div className='dropdown-menu' style={{ padding: '' }}>
        <ul className='list-unstyled'>
        {React.Children.toArray(this.props.children).filter(child => (
          !this.value.trim() || child.props.children.indexOf(this.value) !== -1
        ))}
        </ul>
      </div>
    )
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
MainLangMenu.propTypes = {}

/**
 * Export the component
 */
export default MainLangMenu
