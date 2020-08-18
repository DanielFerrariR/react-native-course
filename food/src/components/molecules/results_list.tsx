import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AxiosSearchResponse } from 'src/hooks'
import ResultsDetail from './result_detail'

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 4
  },
  container: {
    marginBottom: 8
  }
})

interface Props {
  title: string
  results: AxiosSearchResponse['businesses'] | []
}

const ResultsList: React.FC<Props> = ({ title, results }) => {
  const navigation = useNavigation()

  if (!results.length) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
          >
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ResultsList
