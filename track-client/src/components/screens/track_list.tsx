import React, { useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { Container, Appbar, FlatList, List } from 'src/components/atoms'
import { fetchTracks } from 'src/store/tracks'
import { useSelector, useDispatch } from 'src/store'

const TrackList: React.FC = () => {
  const tracks = useSelector((state) => state.tracks)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      const asyncCallback = async () => {
        dispatch(await fetchTracks())
      }

      asyncCallback()
    }, [])
  )

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Track List" />
      </Appbar.Header>
      <Container m={2}>
        <FlatList
          data={tracks}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <List.Item
                title={item.name}
                onPress={() =>
                  navigation.navigate('TrackDetail', { id: item._id })
                }
              />
            )
          }}
        />
      </Container>
    </>
  )
}

export default TrackList
