import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'src/store'
import { addBlogPost } from 'src/store/blogs'
import { ensure } from 'src/utils'

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
    padding: 8
  },
  label: {
    fontSize: 20,
    marginBottom: 8
  }
})

const CreateScreen: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    content: ''
  })
  const blogs = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const onChange = (name: keyof typeof form, text: string) => {
    setForm({ ...form, [name]: text })
  }

  const onSubmit = async () => {
    try {
      dispatch(await addBlogPost(ensure(blogs), form))
      navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput
        style={styles.input}
        value={form.title}
        onChangeText={(text) => onChange('title', text)}
      />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput
        style={styles.input}
        value={form.content}
        onChangeText={(text) => onChange('content', text)}
      />
      <Button title="Add Blog Post" onPress={onSubmit} />
    </View>
  )
}

export default CreateScreen
