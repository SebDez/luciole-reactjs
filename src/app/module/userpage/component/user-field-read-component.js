import React, { PropTypes } from 'react'
import LucioleComponent from './../../../common/core/abstract/luciole-component'
import FontAwesome from 'react-fontawesome'

/**
 * UserFieldRead Component
 */
class UserFieldRead extends LucioleComponent {

  /**
   * Render the component
   * @return {Object} React component tree
   */
  render () {
    const iconSpan = this.props.handleEdit ? <FontAwesome name='pencil' onClick={this.props.handleEdit} /> : null
    const value = this.props.value ? this.props.value : this.i18n.t('application.not_set')
    return (
      <div>
        <label>{this.i18n.t(this.props.label)}</label>
        <div className='well lu-well'>
          <div className='text'>
             {value}
          </div>
          {iconSpan}
        </div>
      </div>)
  }
}

/**
 * The component properties' types
 * @type {Object}
 */
UserFieldRead.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleEdit: PropTypes.func
}

/**
 * Export the component
 */
export default UserFieldRead
