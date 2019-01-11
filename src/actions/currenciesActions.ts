export function addCurrency(cur, val) {
  // console.log('CURRENCY_ADDED', cur, val);
  return {
    type: 'CURRENCY_ADDED',
    cur,
    val
  }
}
export function removeCurrency(cur, val) {
  // console.log('CURRENCY_REMOVED', cur, val);
  return {
    type: 'CURRENCY_REMOVED',
    cur,
    val
  }
}
