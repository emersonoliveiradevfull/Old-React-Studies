import React, { Component } from 'react'

class Events2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      data: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.insertToData = this.insertToData.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  insertToData(){
      //this.state.data.push(this.state.name)
      const arr = this.state.data
      arr.push(this.state.name)
      this.setState({
        data: arr
      })
      console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.handleChange } name="name" id="name" placeholder="Insert your name"/>
        <input type="text" onChange={ this.handleChange } name="age" id="age" placeholder="Insert your age"/>
        <ul>

          { this.state.data.map(item =>(
              <li key={item}> { item } </li>
            ))
          }
        </ul>
        <button type="button" onClick={ this.insertToData }>Send</button>
      </div>
    )
  }
}

export default Events2