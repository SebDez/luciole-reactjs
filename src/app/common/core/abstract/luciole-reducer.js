/**
 * Class for LucioleReducer
 * General parent reducer for Luciole App
 * Define handleActions with an action type and a callback
 * Then reduce to get the new state according to state and action
 */
export default class LucioleReducer {

  /**
   * Create a new LucioleReducer
   * @param {Object} initialState The initialState to use
   */
  constructor (initialState) {
    /** @type {Object}*/
    this.initialState = initialState
    /** @type {Object}*/
    this.handleActions = {}
    /** @type {Function}*/
    this.registerAction = this.registerAction.bind(this)
    /** @type {Function}*/
    this.handleAction = this.handleAction.bind(this)
    /** @type {Function}*/
    this.isActionTypeRegistered = this.isActionTypeRegistered.bind(this)
    /** @type {Function}*/
    this.reduce = this.reduce.bind(this)
  }

/**
 * Register a new action and its callback for reduce
 * @param {Object} actionType The  action's type to register
 * @param {Function} callback The callback for this action's type
 */
  registerAction (actionType, callback) {
    this.handleActions[actionType] = callback
  }

  /**
   * Register a new action and its callback for reduce
   * @param {Object} actionType The action's type
   * @param {Object} state The state to use
   * @param {Object} action The action object to use
   * @return {Object} The new state
   */
  handleAction (actionType, state, action) {
    return this.handleActions[actionType](state, action)
  }

  /**
   * Check if an action is register for this actionType
   * @param {Object} actionType The action's type concerned
   * @return {Boolean} True if the actionType is registered
   */
  isActionTypeRegistered (actionType) {
    return !!this.handleActions[actionType]
  }

  /**
   * Set new state according to action, if no existing action, set default state
   * @param {Object} [state=initialState] The state to set, default is initialState
   * @param {Object} action               The action to use
   */
  reduce (state, action) {
    const stateToUse = state || this.initialState
    return this.isActionTypeRegistered(action.type) ? this.handleAction(action.type, stateToUse, action) : stateToUse
  }
}
