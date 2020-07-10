import React, { Component } from 'react'

class Panel extends Component {
  constructor(props){
    super(props)
    const { headerText, headerColor, data } = this.props
  }

  render() {
    return (
      <div className="panel" style={{ width: '500px', height: '100px', position:'relative' }}>
        <div className="panel-head" style={{ width: '100%', height: '50px', background: this.props.headerColor }}>
          this.props.headerText
        </div>
        <div className="panel-body" >
          { this.props.data }
        </div>
      </div>
    )
  }
}

export default Panel