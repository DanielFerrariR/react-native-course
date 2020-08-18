import Geolocation from 'react-native-geolocation-service'
import {
  LocationState,
  SetCurrentLocationAction,
  StartRecordingAction,
  StopRecordingAction,
  SetLocationsAction,
  ResetFormAction,
  ChangeNameAction,
  SET_CURRENT_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  SET_LOCATIONS,
  CHANGE_NAME,
  RESET_FORM
} from './types'

const setLocations = (
  newLocation: Geolocation.GeoPosition
): SetLocationsAction => {
  return {
    type: SET_LOCATIONS,
    payload: newLocation
  }
}

const changeName = (
  location: LocationState,
  name: string
): ChangeNameAction => {
  return { type: CHANGE_NAME, payload: { ...location, name } }
}

const startRecording = (location: LocationState): StartRecordingAction => {
  return {
    type: START_RECORDING,
    payload: { ...location, recording: true }
  }
}

const stopRecording = (location: LocationState): StopRecordingAction => {
  return {
    type: STOP_RECORDING,
    payload: { ...location, recording: false }
  }
}

const setCurrentLocation = (
  currentLocation: Geolocation.GeoPosition
): SetCurrentLocationAction => {
  return {
    type: SET_CURRENT_LOCATION,
    payload: currentLocation
  }
}

const resetForm = (location: LocationState): ResetFormAction => {
  const newLocation = { ...location, name: '', locations: [] }

  return {
    type: RESET_FORM,
    payload: newLocation
  }
}

export {
  changeName,
  setLocations,
  startRecording,
  stopRecording,
  setCurrentLocation,
  resetForm
}
