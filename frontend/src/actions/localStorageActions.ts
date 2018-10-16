export const lsRecInjection = (localStorageRec) => {
  return {
    type: 'LS_REC_INJ',
    payload: localStorageRec,
  }
}
