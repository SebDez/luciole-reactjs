import initialState from './store/initialState'
import LucioleReducer from './common/core/abstract/luciole-reducer'

// Initialize Reducer
const AppReducer = new LucioleReducer(initialState)

// Register actions

/* *****************************
* ACTION CALLBACKS
* *****************************/

// Export the reducer
export default AppReducer.reduce
