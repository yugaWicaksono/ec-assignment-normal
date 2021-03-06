import * as React from "react"
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"
import Navbar from "./ui/Navbar"
import "./styles/FavoriteList.css"

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
    if (favRacers.length >= 1) {
      return (
        <div>
          <Navbar title="Your Favorite Racers" />
          <ul>
            {favRacers &&
              favRacers.map((racer, index) => (
                <div>
                  <ScrollUpButton />
                  <li key={index}>
                    {racer}
                    {"     "}
                    <span>
                      <button
                        id="removeFavBtn"
                        key={index}
                        onClick={() => {
                          let locRacers = [...favRacers]
                          let indexRacer = locRacers.indexOf(racer)
                          console.log(indexRacer)
                          locRacers.splice(indexRacer, 1)
                          console.log(locRacers)
                          this.setState({ favRacers: locRacers })
                          localStorage.setItem("racer", locRacers.toString())
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
    } else {
      return (
        <div>
          <Navbar title="Your Favorite Racers" />
          <h4 id="noRacerTitle">you don't have favorite racers</h4>
        </div>
      )
    }
  }
}

export default FavoriteList
