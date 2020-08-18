import React from 'react'
import { useDispatch } from 'src/store'
import { destroySession } from 'src/store/destroy_session'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, Button, Appbar } from 'src/components/atoms'

const Settings: React.FC = () => {
  const dispatch = useDispatch()

  const logout = async () => {
    await AsyncStorage.removeItem('@user')

    dispatch(destroySession())
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <Container m={2}>
        <Button onPress={() => logout()}>Logout</Button>
      </Container>
    </>
  )
}

export default Settings
