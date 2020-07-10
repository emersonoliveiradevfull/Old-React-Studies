import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      desc: '',
      age: ''
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const target = event.target
    const name = event.target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
        [name]: value
      }
    )
  }

  render() {
    //console.log(this.state)
    const { classes } = this.props
    return (
      <div className={ classes.root }>
        <AppBar position="static">
          <Toolbar>
            <IconButton>

            </IconButton>
          </Toolbar>
        </AppBar>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          <input type="text" name="name" onChange={this.handleInput}/>
          <input type="text" name="desc" onChange={this.handleInput}/>
          <input type="number" name="age" onChange={this.handleInput}/>
        </p>
        <p>
          <Button variant='contained' color='primary'> Primary </Button>
          <Button variant='contained'> Whitout prop Color </Button>
        </p>


        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    );
  }
}

export default withStyles(styles)(App);
