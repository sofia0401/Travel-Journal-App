import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

import reducers from  './reducers';

console.log(reducers);
// const store = configureStore({reducers}, compose(applyMiddleware(trunk)));
const store = configureStore({
  reducer: reducers
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

