import React, { Component } from 'react'
import './Header.css'

class Header extends Component{
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toogle collapsed" data-toggle="collapse" data-target="#navbar">
                <span className="icon-bar">  </span>
                <span className="icon-bar">  </span>
                <span className="icon-bar">  </span>
              </button>
              <a href="asd" className="navbar-brand">
                <img src="tilst.png" className="img-responsive" alt="logo"/>
              </a>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="nav nav-bar">
                <li></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header