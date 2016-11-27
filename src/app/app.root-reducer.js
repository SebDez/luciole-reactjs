import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { i18nReducer } from 'react-redux-i18n'
import AppReducer from './app.reducer'
import AuthReducer from './common/auth/reducer/auth.reducer'

/**
 * Get the root reducer object
 * @return {Object}          The root reducer object
 */
const rootReducer = combineReducers({
  i18n: i18nReducer,
  routing: routerReducer,
  application: combineReducers({
    app: AppReducer,
    auth: AuthReducer
  })
})

/**
 * Export the reducer
 */
export default rootReducer
