import { createSelector } from 'reselect';

const currencies = (store) => store.currency;

const selectedCurrencies = currency => currency.selectedCurrencies;

export default createSelector(
  currencies,
  selectedCurrencies
);
