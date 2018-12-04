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

  componentDidUpdate() {
    if (localStorage.getItem("racer") !== null) {
      let storeRacers = localStorage.getItem("racer")
      let racerArray = storeRacers.split(",")
      return this.setState({ favRacers: racerArray })
    }
  }

  render() {
    const favRacers = this.state.favRacers
    return (
      <div>
        <Navbar title="Your Favorite Racers" />
        <ul>
          {favRacers &&
            favRacers.map((racer, index) => (
              <div>
                <div>
                  <li key={index}>{racer}</li>
                </div>
                <div>
                  <button
                    id="removeFavBtn"
                    key={index}
                    onClick={() => {
                      let existing = localStorage.getItem("racer")
                      existing = existing ? existing.split(",") : []
                      existing.splice(existing.indexOf(racer))
                      localStorage.setItem("racer", existing.toString())
                    }}
                  >
                    remove racer
                  </button>
                </div>
              </div>
            ))}
        </ul>
      </div>
    )
  }
}

export default FavoriteList
