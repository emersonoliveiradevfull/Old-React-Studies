import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import cfgStore from './store'
import simpleAction from './actions/simple'

const store = cfgStore()
console.log(store.getState())
console.log(store.dispatch(simpleAction()))
console.log(store.getState())

  render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
