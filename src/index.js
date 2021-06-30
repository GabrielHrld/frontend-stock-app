import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import { initialState } from './utils/initialState';

const initialStore = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={initialStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
