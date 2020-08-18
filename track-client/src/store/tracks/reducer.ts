import {
  TracksState,
  TrackActionsTypes,
  FETCH_TRACKS,
  CREATE_TRACK
} from './types'

const initialState = null

const tracksReducer = (
  state: TracksState | null = initialState,
  action: TrackActionsTypes
): TracksState | null => {
  switch (action.type) {
    case FETCH_TRACKS:
      return action.payload
    case CREATE_TRACK:
      return action.payload
    default:
      return state
  }
}

export default tracksReducer
