import React, { Component } from 'react'
import User from "./User";
import photo from "./logo.svg"

class Emerson extends Component {
    render() {
        return (
            <div>
                <User name="Emerson Oliveira" photo={photo}></User>
                <User name="Jefferson Oliveira" photo={photo}></User>
            </div>
        );
    }
}

export default Emerson;