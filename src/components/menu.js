import React from "react"
import {Link} from "react-router-dom"
import {Component} from "./component"
import "../App.css"

export default class Menu extends Component {
  render() {
    return (
      <nav className={"navbar-collapse navbar-page-header navbar-right effect brackets collapse" + (this.props.menuCollapse ? "in" : "")}>
        <ul className="nav navbar-nav">
          <li><Link to="about">Venue</Link></li>
          <li><Link to="monster-index">Add Venue</Link></li>
          <li><Link to="tech">Login</Link></li>
         </ul>
      </nav>
    )
  }
}
