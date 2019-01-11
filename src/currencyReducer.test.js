import currencyReducer from 'reducers/currencyReducer'
// function currencyReducer(state = {}, action) {
//   switch(action.type) {
//     case 'CURRENCIES_FETCHED':
//       return {
//         currencies: action.payload,
//         loggedIn: true
//       }
//     default:
//       return state;
//   }
// }


describe('currencyReducer', () => {

  it('has a default state', () =>{
    expect(currencyReducer(undefined, {type: 'unexpected'})).toEqual({})
  })
})
