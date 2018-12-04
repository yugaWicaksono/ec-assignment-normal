import * as React from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div id="container">
        <h2 id="headerTitle">Formula 1 2009-2018 Racers List</h2>
        <button id="addFav">
          <Link
            to={"/favorites"}
            style={{ textDecoration: "none", color: "black" }}
          >
            List Of Your Favorite Racers
          </Link>
        </button>
      </div>
    )
  }
}
