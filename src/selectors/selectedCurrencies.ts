import { createSelector } from 'reselect';

const currencies = (store) => store.currency;

const selectedCurrencies = currency => { 
  console.log('currency from selectorrr:::', currency)
  return currency.selectedCurrencies };

export default createSelector(
  currencies,
  selectedCurrencies
);
