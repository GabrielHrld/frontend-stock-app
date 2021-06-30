import { setStocksType } from '../utils/actionTypes';

export const setStocks = (payload) => ({
  type: setStocksType,
  payload,
});
