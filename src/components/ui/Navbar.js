import * as React from "react"
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export default class Navbar extends React.Component {
  render() {
    return (
      <div id="container">
        <div>
          <h2 id="navTitle">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Back to main menu
            </Link>
          </h2>
        </div>
        <div id="navSubTitle">
          <h3>
            {this.props.title} {this.props.year}
          </h3>
        </div>
      </div>
    )
  }
}
