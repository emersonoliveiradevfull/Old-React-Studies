import React, { Component } from 'react'
import Panel from "./Panel";

class Props extends Component{
  constructor(props) {
    super(props)
    const { attr1, attr2, attr3 }= this.props
  }

  render() {
    const { attr1, attr2, attr3 }= this.props
    return(
      <div>
        {attr1 === 'p' ? <p>Props</p> : <h1>Props</h1> }
        <Panel headerText="This is a header" headerColor="red" data="School of Net" />
        <Panel headerText="This is a header" headerColor="gray" data="School of Net" />
      </div>
    )
  }
}

export default Props