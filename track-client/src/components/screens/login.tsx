import React, { useState, useCallback } from 'react'
import {
  Typography,
  TextInput,
  Button,
  Box,
  TouchableOpacity,
  Container
} from 'src/components/atoms'
import { useDispatch } from 'src/store'
import { fetchUser } from 'src/store/user'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  useFocusEffect(
    useCallback(() => {
      return () => {
        setForm({ email: '', password: '' })
        setMessage('')
      }
    }, [])
  )

  const onChange = (name: keyof typeof form, text: string) => {
    setMessage('')
    setForm({ ...form, [name]: text })
  }

  const onSubmit = async () => {
    try {
      setLoading(true)

      const response = await fetchUser(form)

      const { payload } = response

      const userData = JSON.stringify(payload)

      await AsyncStorage.setItem('@user', userData)

      dispatch(response)
    } catch (error) {
      setLoading(false)

      if (error?.response?.data) {
        setMessage('Something went wrong with login')
        return
      }

      setMessage('Failed to connect')
    }
  }

  return (
    <Container m={2} justifyContent="center">
      <Typography variant="h1" mb={3} fontWeight="bold">
        Login for Tracker
      </Typography>
      <TextInput
        label="Email"
        placeholder="Input your email"
        mb={3}
        onChangeText={(text) => onChange('email', text)}
        value={form.email}
      />
      <TextInput
        label="Password"
        placeholder="Input your password"
        mb={message ? 1 : 3}
        onChangeText={(text) => onChange('password', text)}
        value={form.password}
        secureTextEntry
      />
      {message ? (
        <Typography color="error" mb={1}>
          {message}
        </Typography>
      ) : null}
      <Button
        mode="contained"
        onPress={onSubmit}
        loading={loading}
        disabled={loading}
      >
        Login
      </Button>
      <Box flexDirection="row" mt={3}>
        <Typography>Doesn&apos;t have an account?&nbsp;</Typography>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Typography color="primary">Register</Typography>
        </TouchableOpacity>
      </Box>
    </Container>
  )
}

export default Login
