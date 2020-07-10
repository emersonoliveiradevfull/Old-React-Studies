import React, { Component } from 'react'

class Clock extends Component {
  render() {
    const returnClock = () => {
      return new Date()
        .toLocaleDateString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
    }
    const color = 'red'

    return (
      <div className={color}>
        {
          returnClock()
        }
      </div>
    )
  }
}

export default Clock