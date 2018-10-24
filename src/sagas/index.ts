import { takeEvery } from 'redux-saga';
import { fork, call, put, all, select } from 'redux-saga/effects';
import request from 'superagent';

import SelectedCurrencies from '../selectors/selectedCurrencies';
const appKey = 'd934bced1d4d402891512ca4937298a9';

function getCurrency() {
  console.log('getCurrency Saga', select(SelectedCurrencies));
  const url = `https://openexchangerates.org/api/latest.json?app_id=${appKey}`;
  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}

function* callGetCurrency({resolve, reject}) {
  const selectedCur = yield select(SelectedCurrencies)
  console.log('selectedCur::', selectedCur);
  const currencies2018 = yield call(getCurrency, appKey);
  if (currencies2018) {
    yield put({type: "CURRENCIES_FETCHED", payload: currencies2018.rates});
    yield call(resolve);
  } else {
    yield call(reject);
  }
}

function getHistory(year = 2018, selectedCurrencies) {
  const url = `https://openexchangerates.org/api/historical/${year}-09-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=${selectedCurrencies},
  &prettyprint=0`;
// console.log('getHistory:::', url);
  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}

function* callGetHistory({resolve, reject}) {
  // appKey = 'd934bced1d4d402891512ca4937298a9';
  const years = [2018, 2017, 2016, 2015, 2014, 2013];
  const selectedCurrencies = (Object.keys(yield select(SelectedCurrencies).toString()));

  console.log('callGetHistory', selectedCurrencies);

  const history = yield all(years.map(year => {
    return call(getHistory, year, selectedCurrencies)
  }));
  console.log('saggga', history);
  if (history.rates) {
    yield put({type: "HISTORY_FETCHED", payload: history});
  }
}

function* getCurrencySaga() {
  yield* takeEvery("AUTH" as any, callGetCurrency);
}

function* getHistorySaga() {
  yield* takeEvery("AUTH" as any, callGetHistory);
}

export default function* rootSaga(selCur) {
  
  yield all([
    fork(getCurrencySaga),
    fork(getHistorySaga)
  ])
}
