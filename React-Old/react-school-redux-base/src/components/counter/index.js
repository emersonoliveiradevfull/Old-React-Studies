import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { incrementNumberAction } from "../../actions/increment";

class Counter extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="card col-md-2 col-md-offset-6">
          <p>Number of Hellows: { this.props.number} </p>
        <button type="button" className="btn btn-primary" onClick={ () => this.props.incrementNumberAction(this.props.number) }> Enviar </button>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    number: store.incrementReducer.number
  }
}

const mapDispathToProps = (dispatch) => bindActionCreators({ incrementNumberAction }, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(Counter)
