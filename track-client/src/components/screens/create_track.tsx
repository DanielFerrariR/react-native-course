import React, { useState } from 'react'
import {
  Container,
  TextInput,
  Button,
  Appbar,
  ScrollView
} from 'src/components/atoms'
import { Map } from 'src/components/molecules'
import { useSelector, useDispatch } from 'src/store'
import { startRecording, stopRecording, changeName } from 'src/store/location'
import { useSaveTrack } from 'src/hooks'

const CreateTrack: React.FC = () => {
  const location = useSelector((state) => state.location)
  const dispatch = useDispatch()
  const [saveTrack] = useSaveTrack()
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Create Track" />
      </Appbar.Header>
      <ScrollView>
        <Container m={2}>
          <Map />
          <TextInput
            label="Track name"
            placeholder="Input the track name"
            my={3}
            value={location.name}
            onChangeText={(text) => dispatch(changeName(location, text))}
          />
          {location.recording ? (
            <Button onPress={() => dispatch(stopRecording(location))}>
              Stop recording
            </Button>
          ) : (
            <Button onPress={() => dispatch(startRecording(location))}>
              Start recording
            </Button>
          )}
          {!location.recording && location.locations.length ? (
            <Button
              mt={3}
              disabled={loading}
              loading={loading}
              onPress={() => saveTrack(setLoading)}
            >
              Save Recording
            </Button>
          ) : null}
        </Container>
      </ScrollView>
    </>
  )
}

export default CreateTrack
