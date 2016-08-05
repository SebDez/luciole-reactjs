import {createStore, applyMiddleware} from 'redux';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import translationsObject from './../../assets/lang/index';

export default function configureStore(initialState) {

  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  store.dispatch(setLocale('fr'));

  return store;
}
