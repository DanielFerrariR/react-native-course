import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 15
  }
})

const InputExample: React.FC = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Enter name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setName(newValue)}
        value={name}
      />
      {name?.length < 6 && (
        <Text>Password must be longer than 5 characters</Text>
      )}
      <Text>My name is {name}</Text>
    </View>
  )
}

export default InputExample
