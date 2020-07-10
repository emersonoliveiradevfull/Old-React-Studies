import React, { Component } from 'react'

class Events extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked : 0
    }

    this.clickMethod = this.clickMethod.bind(this)
  }

  clickMethod(){
    alert("Clicou")
    this.setState({
      clicked: this.state.clicked + 1
    })
    alert(this.state.clicked)
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button type="button" onClick={ this.clickMethod } >Click me</button>
      </div>
    );
  }
}

export default Events