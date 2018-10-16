import React from 'react';

export const validateInput = (selectedCurrencies) => {
  if(selectedCurrencies !== '') {
    setToLocalStorage(selectedCurrencies);
    return true;
  }
}

export const setToLocalStorage = (selectedCurrencies) => {
  let currencies = getFromLocalStorage();
  if((Object as any).entries(selectedCurrencies).length === 0 ||
  currencies.indexOf(selectedCurrencies) > -1) {
    // console.log('selectedCurrencies in setToLocalStorage', selectedCurrencies);
    // console.log('false from setToLocalStorage');
    return false;
  }
  // console.log('selectedCurrencies in setToLocalStorage', selectedCurrencies);
  currencies.push(selectedCurrencies);
  localStorage.setItem('currencies', JSON.stringify(currencies));
  return true;
}

export const getFromLocalStorage = () => {
  let currencies = localStorage.getItem('currencies');
  if (currencies) {
    return JSON.parse(currencies);
  } else {
    return [];
  }
}

export const clearLocalStorage = () => {
  localStorage.clear();
}
