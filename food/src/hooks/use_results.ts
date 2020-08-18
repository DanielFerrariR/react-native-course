import { useState, useEffect } from 'react'
import { api } from 'src/utils'

export interface AxiosSearchResponse {
  total: number
  businesses: {
    rating: number
    price: string
    phone: string
    id: string
    alias: string
    is_closed: boolean
    categories: { alias: string; title: string }[]
    review_count: number
    name: string
    url: string
    coordinates: {
      latitude: number
      longitude: number
    }
    image_url: string
    location: {
      city: string
      country: string
      address2: string
      address3: string
      state: string
      address1: string
      zip_code: string
    }
    distance: number
    transactions: string[]
  }[]
  region: {
    center: {
      latitude: number
      longitude: number
    }
  }
}

const useResults = (): [
  typeof searchApi,
  typeof results,
  typeof errorMessage
] => {
  const [results, setResults] = useState<
    AxiosSearchResponse['businesses'] | []
  >([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await api.get<AxiosSearchResponse>('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      })

      setResults(response.data.businesses)
    } catch (error) {
      console.log(error)
      setErrorMessage('Something went wrong.')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMessage]
}

export default useResults
