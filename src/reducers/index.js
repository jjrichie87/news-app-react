import * as constants from '../constants';

const init = {
  summaryResponse: {},
  isFetching: false

}
export default function (state = init, action) {
  switch (action.type) {
    case constants.FETCH_NEWS_BEGIN: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case constants.FETCH_NEWS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        summaryResponse: action.payload
      });
    }
    case constants.FETCH_NEWS_ERROR: {
      return Object.assign({}, state, {
        isFetching: false,
        isError: true
      });
    }

      break;
  }
  return state;
}


