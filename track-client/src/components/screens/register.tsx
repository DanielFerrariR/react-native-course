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
import { createUser } from 'src/store/user'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

const Register: React.FC = () => {
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

      const response = await createUser(form)

      const { payload } = response

      const userData = JSON.stringify(payload)

      await AsyncStorage.setItem('@user', userData)

      dispatch(response)
    } catch (error) {
      setLoading(false)

      if (error?.response?.data) {
        setMessage('Something went wrong with register')
        return
      }

      setMessage('Failed to connect')
    }
  }

  return (
    <Container justifyContent="center" m={2}>
      <Typography variant="h1" mb={3} fontWeight="bold">
        Register for Tracker
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
        onPress={() => onSubmit()}
        mb={3}
        loading={loading}
        disabled={loading}
      >
        Register
      </Button>
      <Box flexDirection="row">
        <Typography>Already have an account?&nbsp;</Typography>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Typography color="primary">Login</Typography>
        </TouchableOpacity>
      </Box>
    </Container>
  )
}

export default Register
