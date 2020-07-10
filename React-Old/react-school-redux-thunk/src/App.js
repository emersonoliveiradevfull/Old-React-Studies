import React, { Component } from 'react';
import { connect } from 'react-redux'
import { thunkFetchData  } from './actions/app'

class App extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.data.map((item) => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state.fetched,
    isFetching: state.isFetching,
    error: state.fetchedError
  }
}

const mapDispatachToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(thunkFetchData())
  }
}

export default connect(mapStateToProps, mapDispatachToProps)(App);
