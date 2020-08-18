import Geolocation from 'react-native-geolocation-service'
import { DestroySessionActionTypes } from '../destroy_session'

export type TracksState = {
  name: string
  _id: string
  locations: Geolocation.GeoPosition[]
  userId: string
}[]

export const FETCH_TRACKS = 'FETCH_TRACKS'

export const CREATE_TRACK = 'CREATE_TRACK'

export type CreateTrackAxiosResponse = TracksState[0]

export type FetchTrackAxiosResponse = TracksState

export interface FetchTracksAction {
  type: typeof FETCH_TRACKS
  payload: TracksState
}

export interface CreateTrackAction {
  type: typeof CREATE_TRACK
  payload: TracksState
}

export type TrackActionsTypes =
  | FetchTracksAction
  | CreateTrackAction
  | DestroySessionActionTypes
