import * as request from "superagent"
import { baseUrl } from "../constant"

export const FETCH_RACERS = "FETCH_RACERS"

export const racersFetched = racers => ({
  type: FETCH_RACERS,
  payload: racers
})

export const fetchRacerAction = year => dispatch => {
  request(`${baseUrl}/${year}/driverStandings.json`)
    .then(response => {
      dispatch(
        racersFetched(response.body.MRData.StandingsTable.StandingsLists)
      )
    })
    .catch(console.error)
}
