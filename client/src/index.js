import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';
import './index.css';
import reducers from  './reducers';

// const store = configureStore({reducers}, compose(applyMiddleware(trunk)));
const store = configureStore({
  reducer: reducers
}) // store contains all reducers 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // pass store to all components
  <Provider store={store}>
    <App />
  </Provider>
);

