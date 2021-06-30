import { fetchingType, setStocksType } from '../utils/actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case setStocksType:
      return {
        ...state,
        stocks: action.payload,
      };

    case fetchingType:
      return {
        ...state,
        fetching: !state.fetching,
      };
    default:
      return state;
  }
};

export default reducer;
