import axios from 'axios';
import queryString from 'query-string';

export function fetchData() {

  return function(dispatch) {
    axios.get('/Users/dmitry/Sites/tripsorter2/src/response.json')
      .then((response) => {
        dispatch({type: FETCH_DATA_FULFILLED,
                  payload: response.data});
      })
      .catch((err) => {
        dispatch({type: FETCH_POSTS_REJECTED,
                  payload: err});
      })
  }
}

export function fetchOffers(dispatch) {
  const request = axios({
    method: 'GET',
    url: `${BASE_URL}/data`,
    headers: []
  });

  request.then((response) => {
    dispatch(fetchOffersSuccess(response));
  })
  .catch((err) => {
    dispatch(fetchOffersError(err))
  })

  return {
    type: FETCH_DATA,
    payload: request
  };
}
