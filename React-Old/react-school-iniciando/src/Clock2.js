import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date()
        .toLocaleDateString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        })
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateClock(), 1000)
  }

  componentWillMount() {
    clearInterval(this.timer)
  }

  updateClock() {
    this.setState({
      time: new Date()
        .toLocaleDateString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        }),
      name: 'Emerson'
    })
  }

  render() {
    return (
      <div>
        <h1> { this.state.time } </h1>
      </div>
    )
  }
}

export default Clock