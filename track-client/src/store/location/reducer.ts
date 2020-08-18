import {
  LocationState,
  LocationActionsTypes,
  SET_CURRENT_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  SET_LOCATIONS,
  CHANGE_NAME,
  RESET_FORM
} from './types'

const initialState = {
  name: '',
  recording: false,
  locations: [],
  currentLocation: null
}

const locationReducer = (
  state: LocationState = initialState,
  action: LocationActionsTypes
): LocationState => {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload
    case SET_LOCATIONS:
      return { ...state, locations: [...state.locations, action.payload] }
    case SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload }
    case START_RECORDING:
      return action.payload
    case STOP_RECORDING:
      return action.payload
    case RESET_FORM:
      return action.payload
    default:
      return state
  }
}

export default locationReducer
