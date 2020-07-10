import React, { Component } from 'react'

class State extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Emerson',
      age: '23'
    }
    alert(this.state.name + this.state.age)
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  componentDidCatch(error, errorInfo) {
  }


  render() {
    return (
      <div>
        { this.state.name }
        <p>{ this.state.age }</p>
      </div>
    )
  }
}

export default State