import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { getUsers } from './actions/users.actions';

// DevTools
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';



const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

