import axios from 'axios'
import { API_ADDRESS } from '@env'

const api = axios.create({
  baseURL: API_ADDRESS
})

export default api
