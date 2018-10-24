import { createSelector } from 'reselect';

const currencies = (store) => {
  console.log('currency from selectorrr1:::', store.currency)
  return store.currency;
};

const selectedCurrencies = currency => { 
  console.log('currency from selectorrr:::', currency)
  return currency.selectedCurrencies };

export default createSelector(
  currencies,
  selectedCurrencies
);
