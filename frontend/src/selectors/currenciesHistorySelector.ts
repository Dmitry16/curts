// import React from 'react';
import { createSelector } from 'reselect';

const currencies = (store) => {
  const defaultCurrencies = {
    'BTC': 0.000127759842,
    'EUR': 0.859194,
    'RUB': 62.905833,
    'UAH': 26.777,
    'XAG': 0.06466231,
    'XAU': 0.00081753,
    'XPT': 0.00120556,
  }
  // return Object.entries(store.currency.currencies).filter(cur =>
  //   defaultCurrencies.includes(cur[0])).reduce((acc, cur, i) => {
  //     acc[cur[0]] = cur[1];
  //     return acc;
  //   }, {});
  // const zz = store.currency.currencies;
  // console.log('selectorrrrrr', props);
  return defaultCurrencies;
};

const history = store => {
  if (store.currency.history) {
    const reduced = store.currency.history.reduce((acc, cur, ind) => {
      acc[ind] = {'year': new Date(cur['timestamp']*1000).getFullYear(), ...cur['rates']};
      return acc;
    }, []);
    // console.log('history reduced:', reduced);
    return reduced;
  }
};

const currenciesHistory = (
  filteredCurrencies,
  allHistory
) => {
  let arr = [];
  if (filteredCurrencies, allHistory) {
    // ...filteredCurrencies
    arr = [...allHistory];
  }
  return arr;
};

export default createSelector(
  currencies,
  history,
  currenciesHistory
);
