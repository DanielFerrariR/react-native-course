import {
  BlogsState,
  BlogsActionsTypes,
  ADD_BLOGPOST,
  EDIT_BLOGPOST,
  REMOVE_BLOGPOST,
  FETCH_BLOGPOSTS
} from './types'

const initialState = null

const blogsReducer = (
  state: BlogsState | null = initialState,
  action: BlogsActionsTypes
): BlogsState | null => {
  switch (action.type) {
    case FETCH_BLOGPOSTS:
      return action.payload
    case ADD_BLOGPOST:
      return action.payload
    case EDIT_BLOGPOST:
      return action.payload
    case REMOVE_BLOGPOST:
      return action.payload
    default:
      return state
  }
}

export default blogsReducer
