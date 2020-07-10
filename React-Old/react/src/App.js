import React, { Component }  from 'react';
import {Link, Route} from 'react-router-dom'
import routesConfig from "./routesConfig";
/*
import Emerson from "./Emerson";
import List from "./List";
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jane Doe",
            email: "janedoe@gmail.com",
        }

        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
        this.switchState = this.switchState.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    changeState() {
        this.setState({
            name: "Jhon Doe"
        })
    }

    resetState() {
        this.setState({
            name: "Jane Doe"
        })
    }

    switchState() {
        if (this.state.name === "Jane Doe"){
            this.setState({
                name:  "Jhon Doe"
            })
        } else {
            this.setState({
                name: "Jane Doe"
            })
        }
    }

    changeInput(event) {
        let target = event.target
        let index = target.name
        this.setState({
            [index]: target.value
        })
    }


    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <div>
                        <List></List>
                    </div>

                    <div>
                        <form>
                            <label> Name
                                <input type="text" name="name" value={this.state.name} onChange={this.changeInput} />
                            </label>
                            <label> E-mail
                                <input type="text" name="e-mail" value={this.state.email} onChange={this.changeInput}/>
                            </label>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div>
                        {this.state.name} - {this.state.email}
                        <button onClick={this.changeState}>Change the gender now</button>
                        <button onClick={this.resetState}>Reset the gender</button>
                        <button onClick={this.switchState}> Switch gender </button>
                    </div>
                    <div>
                        <Emerson></Emerson>
                    </div>

                </header>
            </div>
        );
    }
}
*/

class App extends Component {
render() {
        return(
            <div>
                <div className="App">
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                </div>

                {routesConfig.map((value, key)=>{
                    return <Route
                        key={key}
                        path={value.path}
                        component={value.component}
                        exact={value.exact}>
                    </Route>
                })}

            </div>
        );
    }
}

export default App;
