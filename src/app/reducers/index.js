// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import {i18nReducer } from 'react-redux-i18n';

 const rootReducer = combineReducers({
   i18n: i18nReducer,
   routing: routerReducer
 });

 export default rootReducer;
