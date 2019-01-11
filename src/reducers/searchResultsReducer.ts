export default function searchResultsReducer(
  state={
    filteredData: false,
    visible: false,
    sortedTrip: [],
  }, action) {

  switch (action.type) {
    case 'NEW_SEARCH': {
      return {...state,
        visible: true,
      }
    }
    case 'FETCH_DATA_FULFILLED': {
        return {...state,
          filteredData: true,
          visible: true,          
          sortedTrip: [ action.payload[0],
                        action.payload[1] ? action.payload[1] : null,
                        action.payload[2] ? action.payload[2] : null,
                        action.payload[3] ? action.payload[3] : null,
                        action.payload[4] ? action.payload[4] : null,
                        action.payload[5] ? action.payload[5] : null,
                      ],
        }
      }
    case 'RESET_SEARCH': {
        return {...state,
          filteredData: false,
          sortedTrip: [],
          visible: false,
        }
      }
  }
  return state;
}
