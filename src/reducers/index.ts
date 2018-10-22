import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import searchResultsReducer from './searchResultsReducer'
// import searchOptionsReducer from './searchOptionsReducer'
import appConfigReducer from './appConfigReducer'

import { reducer as formReducer } from 'redux-form'
import { currenciesReducer } from './currencyReducer'

export default combineReducers({
  searchResults: searchResultsReducer,
  appConfig: appConfigReducer,
  form: formReducer,
  currency: currenciesReducer,
  routing: routerReducer
})
