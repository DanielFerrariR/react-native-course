import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  insideOneViewStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  insideTwoViewStyle: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    top: 100
  },
  insideThreeViewStyle: {
    backgroundColor: 'blue',
    // flex: 1,
    // alignSelf: 'center'
    width: 100,
    height: 100
    // ...StyleSheet.absoluteFillObject
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const LayoutExample: React.FC = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.insideOneViewStyle} />
      <View style={styles.insideTwoViewStyle} />
      <View style={styles.insideThreeViewStyle} />
    </View>
  )
}

export default LayoutExample
