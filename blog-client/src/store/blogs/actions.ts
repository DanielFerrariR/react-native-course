import { api } from 'src/utils'
import {
  ADD_BLOGPOST,
  AddBlogPostAction,
  BlogsState,
  AddBlogPostData,
  EditBlogPostData,
  EditBlogPostAction,
  EDIT_BLOGPOST,
  FETCH_BLOGPOSTS,
  FetchBlogPostAction
} from './types'

const fetchBlogPosts = async (): Promise<FetchBlogPostAction> => {
  const response = await api.get<BlogsState>('/blogposts')

  return {
    type: FETCH_BLOGPOSTS,
    payload: response.data
  }
}

const addBlogPost = async (
  blogPosts: BlogsState,
  data: AddBlogPostData
): Promise<AddBlogPostAction> => {
  const response = await api.post<BlogsState[0]>('/blogposts', data)

  const newBlogPosts = [...blogPosts, response.data]

  return {
    type: ADD_BLOGPOST,
    payload: newBlogPosts
  }
}

const editBlogPost = async (
  blogPosts: BlogsState,
  data: EditBlogPostData
): Promise<EditBlogPostAction> => {
  const newBlogsPosts = blogPosts.map((each) => {
    if (each.id === data.id) {
      return {
        id: each.id,
        title: data.title,
        content: data.content
      }
    }

    return each
  })

  await api.put<BlogsState[0]>(`/blogposts/${data.id}`, {
    title: data.title,
    content: data.content
  })

  return {
    type: EDIT_BLOGPOST,
    payload: newBlogsPosts
  }
}

const removeBlogPost = async (
  blogsPosts: BlogsState,
  id: number
): Promise<AddBlogPostAction> => {
  const newBlogsPosts = blogsPosts.filter((element) => element.id !== id)

  await api.delete<BlogsState[0]>(`/blogposts/${id}`)

  return {
    type: ADD_BLOGPOST,
    payload: newBlogsPosts
  }
}

export { fetchBlogPosts, addBlogPost, editBlogPost, removeBlogPost }
