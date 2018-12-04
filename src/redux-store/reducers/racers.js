import { FETCH_RACERS } from "../actions/fetchRacers"
import { RESET_RACERS } from "../actions/resetRacers"

export function racers(state = [], { type, payload }) {
  switch (type) {
    case FETCH_RACERS:
      const fetchRacers = payload[0]
      return fetchRacers.DriverStandings
    case RESET_RACERS:
      return []
    default:
      return state
  }
}
