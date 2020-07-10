import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux'
import { clickHelloAction } from "./actions/index";
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
        text: event.target.value
    })
  }

  render() {
    console.log(this.state.text)
    return (
      <div className="App">
        <input type="text" onChange={this.handleInputChange} />
        <button type="button" onClick={ () => this.props.clickHelloAction(this.state.text) }> Click to Dispatch Action </button>
        <h1>{ this.props.msg }</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    msg: store.clickReducer.msg
  }
}

// Chamada das actions usando o auxiliar bindActionCreators
const mapDispatchToProps = (dispatch) => bindActionCreators({ clickHelloAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
