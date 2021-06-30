import { setStocksType } from '../utils/actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case setStocksType:
      return {
        ...state,
        stocks: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
