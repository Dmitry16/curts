import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import request from 'superagent';

//emulated API call result
// const result = {
//   rates: {
//     AED
//     :
//     3.673097,
//     AFN
//     :
//     69.375,
//     ALL
//     :
//     105.2,
//     AMD
//     :
//     480,
//     ANG
//     :
//     1.783141,
//     AOA
//     :
//     214.584,
//     ARS
//     :
//     20.1755,
//     AUD
//     :
//     1.299545,
//     AWG
//     :
//     1.784998,
//     AZN
//     :
//     1.7025,
//     BAM
//     :
//     1.582704
//   }
// };

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

function getHistory2017(appKey) {
  const url = `https://openexchangerates.org/api/historical/2017-02-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=BTC,UAH,RUB,EUR,XAU
  &prettyprint=0`;

  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}
function getHistory2016(appKey) {
  const url = `https://openexchangerates.org/api/historical/2016-02-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=BTC,UAH,RUB,EUR,XAU
  &prettyprint=0`;

  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}
function getHistory2015(appKey) {
  const url = `https://openexchangerates.org/api/historical/2015-02-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=BTC,UAH,RUB,EUR,XAU
  &prettyprint=0`;

  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}
function getHistory2014(appKey) {
  const url = `https://openexchangerates.org/api/historical/2014-02-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=BTC,UAH,RUB,EUR,XAU
  &prettyprint=0`;

  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}
function getHistory2013(appKey) {
  const url = `https://openexchangerates.org/api/historical/2013-02-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=BTC,UAH,RUB,EUR,XAU
  &prettyprint=0`;

  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}

function* callGetCurrency({appKey, resolve, reject}) {
  const result = yield call(getCurrency, appKey);
  const history2017 = yield call(getHistory2017, appKey);
  const history2016 = yield call(getHistory2016, appKey);
  const history2015 = yield call(getHistory2015, appKey);
  const history2014 = yield call(getHistory2014, appKey);
  const history2013 = yield call(getHistory2013, appKey);
  // console.log('saggga', appKey, result);
  if (result) {
    yield put({type: "CURRENCIES_FETCHED", payload: result.rates});
    yield call(resolve);
  } else {
    yield call(reject, {appKey: 'Access Erorr. App Key is not valid.'});
  }
  if (history2017) {
    yield put({type: "HISTORY2017_FETCHED", payload: history2017.rates});
  }
  if (history2016) {
    yield put({type: "HISTORY2016_FETCHED", payload: history2016.rates});
  }
  if (history2015) {
    yield put({type: "HISTORY2015_FETCHED", payload: history2015.rates});
  }
  if (history2014) {
    yield put({type: "HISTORY2014_FETCHED", payload: history2014.rates});
  }
  if (history2013) {
    yield put({type: "HISTORY2013_FETCHED", payload: history2013.rates});
  }
}

function* getCurrencySaga() {
  yield* takeEvery("AUTH", callGetCurrency);
}

export default function* rootSaga() {
  yield [
    fork(getCurrencySaga)
  ]
}
