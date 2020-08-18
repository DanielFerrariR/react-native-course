import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { api } from 'src/utils'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8
  },
  image: {
    height: 240,
    width: '100%',
    marginBottom: 8,
    borderRadius: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8
  }
})

interface AxiosDetailsResponse {
  id: string
  alias: string
  name: string
  image_url: string
  is_claimed: boolean
  is_closed: boolean
  url: string
  phone: string
  display_phone: string
  review_count: number
  categories: {
    alias: string
    title: string
  }[]
  rating: number
  location: {
    address1: string
    address2: string
    address3: string
    city: string
    zip_code: string
    country: string
    state: string
    display_address: string[]
    cross_streets: string
  }
  coordinates: {
    latitude: number
    longitude: number
  }
  photos: string[]
  price: string
  hours: [
    {
      open: {
        is_overnight: boolean
        start: string
        end: string
        day: number
      }[]
      hours_type: string
      is_open_now: boolean
    }
  ]
  transactions: []
  special_hours: {
    date: string
    is_closed: null
    start: string
    end: string
    is_overnight: boolean
  }[]
}

interface Props {
  route: {
    key: string
    name: string
    params: {
      id: string
    }
  }
}

const ResultsShowScreen: React.FC<Props> = ({ route }) => {
  const [result, setResult] = useState<AxiosDetailsResponse | null>(null)
  const { id } = route.params

  const getResult = async (providedId: string) => {
    const response = await api.get<AxiosDetailsResponse>(`/${providedId}`)

    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  )
}

export default ResultsShowScreen
