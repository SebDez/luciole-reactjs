import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { i18nReducer } from 'react-redux-i18n'
import AppReducer from './app.reducer'
import AuthReducer from './common/auth/reducer/auth.reducer'
import SidebarReducer from './module/sidebar/reducer/sidebar.reducer'

/**
 * Get the root reducer object
 * @return {Object}          The root reducer object
 */
const rootReducer = combineReducers({
  i18n: i18nReducer,
  routing: routerReducer,
  application: combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    module: combineReducers({
      sidebar: SidebarReducer
    })
  })
})

/**
 * Export the reducer
 */
export default rootReducer
