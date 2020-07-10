import React, { Component } from 'react';
import InitForm from './../components/InitForm'
import { connect } from  'react-redux'

import { sendServer }  from  './../actions'


//Container
class App extends Component {
  onClick = (e, data) => {
    e.preventDefault()
    console.log('Clicked in the form', data)
    this.props.createname(data)
  }

  onChangeName = ({ target }) => {
    const { name, value } = target
    console.log('Target Input', name, value)
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            Redux Form
          </div>
          <div className="card-body">
            <div className="card-title">My First Redux Form</div>
            <InitForm myClick={ this.onClick } onChangeName={ this.onChangeName } />
          </div>
          <div className="card-footer">
            <p>Card footer</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createname: (data) => dispatch(sendServer(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
