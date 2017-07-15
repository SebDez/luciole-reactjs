import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { i18nReducer } from 'react-redux-i18n'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'
import {reducer as modalReducer} from 'react-redux-modal'
import AppReducer from './app-reducer'
import AuthReducer from './common/auth/reducer/auth-reducer'
import SidebarReducer from './module/sidebar/reducer/sidebar-reducer'
import MainReducer from './module/main/reducer/main-reducer'
import UserPageReducer from './module/userpage/reducer/userpage-reducer'

/**
 * Get the root reducer object
 * @return {Object}          The root reducer object
 */
const rootReducer = combineReducers({
  i18n: i18nReducer,
  routing: routerReducer,
  toastr: toastrReducer,
  modals: modalReducer,
  form: formReducer,
  application: combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    module: combineReducers({
      sidebar: SidebarReducer,
      main: MainReducer,
      userpage: UserPageReducer
    })
  })
})

/**
 * Export the reducer
 */
export default rootReducer
