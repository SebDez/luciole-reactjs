import { createStore, applyMiddleware } from 'redux'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import thunk from 'redux-thunk'
import rootReducer from '../app-root-reducer'
import translationsObject from './../../assets/lang/index'

import confProd from './../../env/prod'

/**
 * Configure the store for the PROD mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */
/* istanbul ignore next */
export default function configureStore (initialState) {
  initialState.conf = confProd
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translationsObject))
  store.dispatch(setLocale('fr'))

  return store
}
