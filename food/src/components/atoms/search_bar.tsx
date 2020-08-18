import React, { Dispatch, SetStateAction } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 16,
    backgroundColor: '#F0EEEE',
    height: 48,
    borderRadius: 4,
    marginHorizontal: 16,
    flexDirection: 'row',
    marginBottom: 8
  },
  inputStyle: {
    flex: 1,
    fontSize: 16
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: 'center',
    marginHorizontal: 12
  }
})

interface Props {
  term: string
  setTerm: Dispatch<SetStateAction<string>>
  onTermSubmitted: () => void
}

const SearchBar: React.FC<Props> = ({ term, setTerm, onTermSubmitted }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
        onEndEditing={onTermSubmitted}
      />
    </View>
  )
}

export default SearchBar
