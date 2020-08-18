import React, { useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'src/store'
import { fetchBlogPosts, removeBlogPost } from 'src/store/blogs'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})

const IndexScreen: React.FC = () => {
  const blogs = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    const asyncEffect = async () => {
      dispatch(await fetchBlogPosts())
    }

    asyncEffect()

    // const listener = navigation.addListener('focus', () => {
    //   asyncEffect()
    // })

    // return listener
  }, [])

  const remove = async (id: number) => {
    try {
      dispatch(await removeBlogPost(blogs || [], id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <>
        <FlatList
          data={blogs}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => remove(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </>
    </View>
  )
}

export default IndexScreen
