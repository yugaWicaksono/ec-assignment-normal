import * as React from "react"
import { connect } from "react-redux"
import Navbar from "./ui/Navbar"
import { fetchRacerAction } from "../redux-store/actions/fetchRacers"
import { resetRacers } from "../redux-store/actions/resetRacers"
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"
import { Link } from "react-router-dom"
import "./styles/RacersListContainer.css"

class RacersListContainer extends React.Component {
  async componentDidMount() {
    await this.props.resetRacers()
    await this.props.fetchRacerAction(this.props.match.params.year)
  }

  render() {
    const standings = this.props.racers
    if (!standings) {
      return (
        <div>
          <Navbar />
          <h5> ...loading </h5>
        </div>
      )
    } else {
      return (
        <div>
          <Navbar title={"Season"} year={this.props.match.params.year} />
          <ul>
            {standings &&
              standings.map((racer, index) => (
                <div
                  id="racerListItem"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <ScrollUpButton />
                  <div style={{ width: "80vw" }}>
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <a href={racer.Driver.url}>
                        Driver: {racer.Driver.familyName},
                        {racer.Driver.givenName}{" "}
                        <span>Points: {racer.points}</span>
                        <span>Position:{racer.position}</span>
                      </a>
                    </li>
                  </div>
                  <div style={{ width: "20vw" }}>
                    <button
                      id="addBtn"
                      onClick={() => {
                        let existing = localStorage.getItem("racer")
                        existing = existing ? existing.split(",") : []
                        if (existing.includes(racer.Driver.familyName)) {
                          alert("racer already added")
                          return
                        } else {
                          existing.push(racer.Driver.familyName)
                          localStorage.setItem("racer", existing.toString())
                        }
                      }}
                    >
                      add to favorite
                    </button>
                  </div>
                </div>
              ))}
          </ul>
        </div>
      )
    }
  }
}

export const mstp = state => ({
  seasons: state.seasons.years,
  racers: state.racers
})

export default connect(
  mstp,
  { fetchRacerAction, resetRacers }
)(RacersListContainer)
