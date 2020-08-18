import { LocationState } from 'src/store/location'
import { api } from 'src/utils'
import {
  TracksState,
  FETCH_TRACKS,
  CREATE_TRACK,
  CreateTrackAction,
  FetchTracksAction,
  CreateTrackAxiosResponse,
  FetchTrackAxiosResponse
} from './types'

const fetchTracks = async (): Promise<FetchTracksAction> => {
  const response = await api.get<FetchTrackAxiosResponse>('/tracks')

  return {
    type: FETCH_TRACKS,
    payload: response.data
  }
}

const createTrack = async (
  name: LocationState['name'],
  locations: LocationState['locations'],
  tracks: TracksState
): Promise<CreateTrackAction> => {
  const response = await api.post<CreateTrackAxiosResponse>('/tracks', {
    name,
    locations
  })

  const newTracks = [...tracks]

  newTracks.push(response.data)

  return {
    type: CREATE_TRACK,
    payload: newTracks
  }
}

export { fetchTracks, createTrack }
