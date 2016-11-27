import { createStore, applyMiddleware } from 'redux'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import thunk from 'redux-thunk'
import rootReducer from '../app.root-reducer'
import translationsObject from './../../assets/lang/index'

/**
 * Configure the store for the PROD mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */
export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translationsObject))
  store.dispatch(setLocale('fr'))

  return store
}
