import * as React from "react"
import "./styles/FavoriteList.css"
import Navbar from "./ui/Navbar"

class FavoriteList extends React.Component {
  state = {
    favRacers: null
  }

  componentWillMount() {
    if (localStorage.getItem("racer") !== null) {
      let storeRacers = localStorage.getItem("racer")
      let racerArray = storeRacers.split(",")
      return this.setState({ favRacers: racerArray })
    }
  }

  render() {
    const favRacers = this.state.favRacers
    if (!favRacers) {
      return (
        <div>
          <Navbar title="Your Favorite Racers" />
          <h4>you don't have favorite racers</h4>
        </div>
      )
    } else {
      return (
        <div>
          <Navbar title="Your Favorite Racers" />
          <ul>
            {favRacers &&
              favRacers.map((racer, index) => (
                <div>
                  <li key={index}>
                    {racer}
                    <span>
                      <button
                        id="removeFavBtn"
                        key={index}
                        onClick={() => {
                          let existing = localStorage.getItem("racer")
                          existing = existing ? existing.split(",") : []
                          let indexRacer = existing.indexOf(racer)
                          existing.splice(indexRacer, 1)
                          localStorage.setItem("racer", existing.toString())
                          window.location.reload()
                        }}
                      >
                        remove racer
                      </button>
                    </span>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      )
    }
  }
}

export default FavoriteList
