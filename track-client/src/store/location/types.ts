import Geolocation from 'react-native-geolocation-service'
import { DestroySessionActionTypes } from '../destroy_session'

export interface LocationState {
  name: string
  recording: boolean
  locations: Geolocation.GeoPosition[]
  currentLocation: Geolocation.GeoPosition | null
}

export const START_RECORDING = 'START_RECORDING'

export const STOP_RECORDING = 'STOP_RECORDING'

export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'

export const SET_LOCATIONS = 'SET_LOCATIONS'

export const CHANGE_NAME = 'CHANGE_NAME'

export const RESET_FORM = 'RESET_FORM'

export interface ResetFormAction {
  type: typeof RESET_FORM
  payload: LocationState
}

export interface ChangeNameAction {
  type: typeof CHANGE_NAME
  payload: LocationState
}

export interface SetLocationsAction {
  type: typeof SET_LOCATIONS
  payload: Geolocation.GeoPosition
}

export interface StartRecordingAction {
  type: typeof START_RECORDING
  payload: LocationState
}

export interface StopRecordingAction {
  type: typeof STOP_RECORDING
  payload: LocationState
}

export interface SetCurrentLocationAction {
  type: typeof SET_CURRENT_LOCATION
  payload: Geolocation.GeoPosition
}

export type LocationActionsTypes =
  | ResetFormAction
  | ChangeNameAction
  | SetLocationsAction
  | StartRecordingAction
  | StopRecordingAction
  | SetCurrentLocationAction
  | DestroySessionActionTypes
