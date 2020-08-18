import React from 'react'
import { Container, Typography, Appbar } from 'src/components/atoms'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'src/store'
import { ensure } from 'src/utils'
import MapView, { Polyline } from 'react-native-maps'

interface Props {
  route: {
    key: string
    name: string
    params: {
      id: string
    }
  }
}

const TrackDetail: React.FC<Props> = ({ route }) => {
  const tracks = useSelector((state) => state.tracks)
  const { id } = route.params
  const navigation = useNavigation()
  const track = ensure(ensure(tracks).find((element) => element._id === id))
  const initialCoords = track.locations[0].coords

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('TrackList')} />
        <Appbar.Content title="Track Detail" />
      </Appbar.Header>
      <Container m={2}>
        <Typography variant="h1" mb={3}>Track name: {track.name}</Typography>
        <MapView
          style={{ height: 300 }}
          initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
            ...initialCoords
          }}
        >
          <Polyline coordinates={track.locations.map((each) => each.coords)} />
        </MapView>
      </Container>
    </>
  )
}

export default TrackDetail
