import React, { useState } from 'react'
import { Text, ScrollView } from 'react-native'
import { SearchBar } from 'src/components/atoms'
import { useResults } from 'src/hooks'
import { ResultsList } from 'src/components/molecules'

const SearchScreen: React.FC = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price: string) => {
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  )
}

export default SearchScreen
