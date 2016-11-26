// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /App.reducer.

import { createStore, compose, applyMiddleware } from 'redux'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import thunk from 'redux-thunk'
import rootReducer from '../App.reducer'
import translationsObject from './../../assets/lang/index'

/**
 * Configure the store for the DEV mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */
export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk), compose(
    // Add other middleware on this line...
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../App.reducer', () => {
      const nextReducer = require('../App.reducer').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translationsObject))
  store.dispatch(setLocale('fr'))

  return store
}
