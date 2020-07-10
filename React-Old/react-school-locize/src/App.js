import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withTranslation } from 'react-i18next'

class App extends Component {
  render() {
    const { t } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> { t('WELCOME_TEXT') } </h1>
        </header>
      </div>
    )
  }
}

export default withTranslation('translations')(App);
