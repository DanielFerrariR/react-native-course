import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import {
  IndexScreen,
  ShowScreen,
  CreateScreen,
  EditScreen
} from 'src/components/screens'
import store from 'src/utils/redux'
import { TouchableOpacity } from 'react-native'
import { Feather, EvilIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()

interface Options {
  navigation: any
  route: any
}

const Routes: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            gestureEnabled: false,
            title: 'Blogs'
          }}
        >
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }: Options) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <Feather name="plus" size={32} />
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation, route }: Options) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Edit', { id: route.params.id })
                  }
                >
                  <EvilIcons name="pencil" size={32} />
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default Routes
