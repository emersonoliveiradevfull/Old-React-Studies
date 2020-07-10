import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './containers/Home'
import { Provider } from 'react-redux'
import { Store, History } from './store/store'

import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import Header from "./containers/Header";

import './index.css'

import Localforage from 'localforage'

const db = Localforage.createInstance({
  name: 'kanban_react',
  driver:  Localforage.INDEXEDDB,
  description: 'Used to Trello store panls and cars',
  version: 1.0
})

db.getItem('kanban')
  .then(value => value)
  .then(value => Store).then((store) => {
    ReactDOM.render(
      <div id="app">
        <Header />
        <main id="main" className="container-fluid">
          <Provider store={ Store }>
            <ConnectedRouter history={ History }>
              <Switch>
                <Route exact path='/' component={ Home } />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </main>
      </div>, document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
  })






