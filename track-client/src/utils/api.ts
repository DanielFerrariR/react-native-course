import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { API_ADDRESS } from '@env'
import AsyncStorage from '@react-native-community/async-storage'

const axiosConfig = {
  baseURL: API_ADDRESS
}

const api = axios.create(axiosConfig)

const errorHandler = (error: AxiosError) => {
  return Promise.reject(error)
}

const successHandler = async (config: AxiosRequestConfig) => {
  const userData = await AsyncStorage.getItem('@user')

  if (userData) {
    const newUserData = JSON.parse(userData)

    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${newUserData.token}`
  }

  return config
}

api.interceptors.request.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
)

export default api
