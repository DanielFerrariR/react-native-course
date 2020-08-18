import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

const ListExample: React.FC = () => {
  const friends = [
    { name: 'Friend #1', age: '30' },
    { name: 'Friend #2', age: '20' },
    { name: 'Friend #3', age: '40' },
    { name: 'Friend #4', age: '20' },
    { name: 'Friend #5', age: '10' },
    { name: 'Friend #6', age: '50' },
    { name: 'Friend #7', age: '60' },
    { name: 'Friend #8', age: '80' },
    { name: 'Friend #9', age: '100' }
  ]

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )
      }}
    />
  )
}

export default ListExample
