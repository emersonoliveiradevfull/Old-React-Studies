import React, { Component } from 'react';
import './App.css';
import * as serviceWorker from './../../serviceWorker';

import { Store } from './../../store/index'
import { Provider } from 'react-redux'
import Counter from './../counter'

const App = () => (
  <Provider store={Store}>
    <div className="container-fluid h-100">
      <div className="h-100">
        <Counter />
      </div>
    </div>
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
export default App
