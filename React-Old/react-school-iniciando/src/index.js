import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Hello from './Hello'
import Clock from './Clock'
import Clock2 from './Clock2'
import Props from './Props'
import State from "./State";
import Events from "./Events";
import Events2 from "./Events2";

import { MuiThemeProvider, createMuiTheme } from  '@material-ui/core'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: red
  }
})


//ReactDOM.render(<Props attr1="1" attr2="2" attr3="3"/>, document.getElementById('root'));
ReactDOM.render(
  <MuiThemeProvider theme={ theme }>
    <App />
  </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
