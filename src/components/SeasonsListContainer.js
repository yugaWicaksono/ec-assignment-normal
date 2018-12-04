import * as React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./styles/SeasonsListContainer.css"

class SeasonsListContainer extends React.PureComponent {
  render() {
    const { seasons } = this.props
    return (
      <div>
        <ul>
          {seasons &&
            seasons.map(season => (
              <li key={season}>
                <Link
                  to={`/${season}/standing`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {season}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mstp = state => ({
  seasons: state.seasons
})

export default connect(
  mstp,
  null
)(SeasonsListContainer)
