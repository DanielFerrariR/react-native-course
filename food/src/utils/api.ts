import axios from 'axios'
import { API_ADDRESS, TOKEN } from '@env'

const api = axios.create({
  baseURL: API_ADDRESS,
  headers: {
    Authorization: TOKEN
  }
})

export default api
