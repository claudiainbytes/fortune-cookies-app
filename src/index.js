import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.scss';
import { combineReducers } from 'redux';
import { quotesReducer } from './redux/reducers';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  quotes: quotesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
 
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
