import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { AxiosSearchResponse } from 'src/hooks'

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    width: 240,
    height: 120,
    marginBottom: 4
  },
  name: {
    fontWeight: 'bold'
  },
  container: {
    marginLeft: 16
  }
})

interface Props {
  result: AxiosSearchResponse['businesses'][0]
}

const ResultsDetail: React.FC<Props> = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

export default ResultsDetail
