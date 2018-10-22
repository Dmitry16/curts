import { createSelector } from 'reselect';

const currencies = (store) => {
  return store.currency;
};

const selectedCurrencies = currency => currency.selectedCurrencies;

export default createSelector(
  currencies,
  selectedCurrencies
);
