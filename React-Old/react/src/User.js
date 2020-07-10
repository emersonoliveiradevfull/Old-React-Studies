import React, { Component } from 'react'

class User extends Component {
    render() {
        return(
            <div>
                <div>
                    Foto: <img src={this.props.photo} alt=""/>
                </div>
                <div>
                    Nome: {this.props.name}
                </div>
            </div>
        );
    }
}

export default User;