import { DestroySessionActionTypes } from '../destroy_session'

export type BlogsState = { id: number; title: string; content: string }[]

export const FETCH_BLOGPOSTS = 'FETCH_BLOGPOSTS'

export const ADD_BLOGPOST = 'ADD_BLOGPOST'

export const EDIT_BLOGPOST = 'EDIT_BLOGPOST'

export const REMOVE_BLOGPOST = 'ADD_BLOGPOST'

export interface AddBlogPostData {
  title: string
  content: string
}

export interface EditBlogPostData {
  id: number
  title: string
  content: string
}

export interface FetchBlogPostAction {
  type: typeof FETCH_BLOGPOSTS
  payload: BlogsState
}

export interface AddBlogPostAction {
  type: typeof ADD_BLOGPOST
  payload: BlogsState
}

export interface EditBlogPostAction {
  type: typeof EDIT_BLOGPOST
  payload: BlogsState
}

export interface RemoveBlogPostAction {
  type: typeof REMOVE_BLOGPOST
  payload: BlogsState
}

export type BlogsActionsTypes =
  | FetchBlogPostAction
  | AddBlogPostAction
  | EditBlogPostAction
  | RemoveBlogPostAction
  | DestroySessionActionTypes
