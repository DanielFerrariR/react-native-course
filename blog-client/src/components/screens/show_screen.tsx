import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'src/store'
import { ensure } from 'src/utils'

interface Props {
  route: {
    key: string
    name: string
    params: {
      id: string
    }
  }
}

const ShowScreen: React.FC<Props> = ({ route }) => {
  const blogs = useSelector((state) => state.blogs)
  const blogPost = ensure(
    ensure(blogs).find((element) => element.id === Number(route.params.id))
  )

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

export default ShowScreen
