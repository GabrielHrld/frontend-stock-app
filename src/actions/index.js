import { setStocksType, fetchingType } from '../utils/actionTypes';

export const setStocks = (payload) => ({
  type: setStocksType,
  payload,
});

export const handleFetching = () => ({
  type: fetchingType,
});
