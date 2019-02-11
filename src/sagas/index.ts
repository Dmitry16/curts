import { takeEvery } from 'redux-saga';
import { fork, call, put, all, select } from 'redux-saga/effects';
import request from 'superagent';

import SelectedCurrencies from '../selectors/selectedCurrencies';


function getCurrency(appKey) {
  // console.log('getCurrency Saga', appKey);
  const url = `https://openexchangerates.org/api/latest.json?app_id=${appKey}`;
  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}


function* callGetCurrency({appKey, resolve, reject}) {  
  const currencies2018 = yield call(getCurrency, appKey);
  if (currencies2018) {
    yield put({type: "CURRENCIES_FETCHED", payload: currencies2018.rates});
    yield call(resolve);
  } else {
    yield call(reject, {appKey: 'Access Erorr. App Key is not valid.'});
  }
}

function getHistory(appKey, year = 2018, selectedCurrencies) {
  const url = `https://openexchangerates.org/api/historical/${year}-09-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=${selectedCurrencies},
  &prettyprint=0`;

  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}

function* callGetHistory({appKey, resolve, reject}) {
  const years = [2018, 2017, 2016, 2015, 2014, 2013];
  const selectedCurrencies = (Object.keys(yield select(SelectedCurrencies)).toString());

  console.log('callGetHistory', selectedCurrencies);

  const history = yield all(years.map(year => {
    return call(getHistory, appKey, year, selectedCurrencies)
  }));
  // console.log('saggga', history);
  if (history) {
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
