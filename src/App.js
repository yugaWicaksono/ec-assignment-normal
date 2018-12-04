import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/ui/Header"
import SeasonsListContainer from "./components/SeasonsListContainer"
import RacersListContainer from "./components/RacersListContainer"
import FavoriteList from "./components/FavoriteList"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={SeasonsListContainer} />
          <Route exact path="/:year/standing" component={RacersListContainer} />
          <Route exact path="/favorites" component={FavoriteList} />
        </div>
      </Router>
    )
  }
}

export default App
