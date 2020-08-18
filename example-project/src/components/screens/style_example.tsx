import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  firstTextStyle: {
    fontSize: 45
  },
  secondTextStyle: {
    fontSize: 20
  }
})

const StyleExample: React.FC = () => {
  const name = 'Daniel'

  return (
    <View>
      <Text style={styles.firstTextStyle}>
        Getting started with React Native
      </Text>
      <Text style={styles.secondTextStyle}>My name is {name}</Text>
    </View>
  )
}

export default StyleExample
