import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import {
  CreateTrack,
  Login,
  Register,
  Settings,
  TrackDetail,
  TrackList
} from 'src/components/screens'
import store from 'src/utils/redux'
import { useSelector, useDispatch } from 'src/store'
import AsyncStorage from '@react-native-community/async-storage'
import { setLoggedUser, setNotLoggedUser } from 'src/store/user'
import { Provider as PaperProvider, Colors } from 'react-native-paper'
import { theme } from 'src/styles'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const Routes: React.FC = () => {
  const userSession = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const userData = await AsyncStorage.getItem('@user').catch()

        if (userData) {
          const newUserData = JSON.parse(userData)

          dispatch(setLoggedUser(newUserData))
        } else {
          dispatch(setNotLoggedUser())
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (userSession === null) {
      asyncEffect()
    }
  }, [userSession])

  const TrackListFlow = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false
        }}
      >
        <Stack.Screen name="TrackList" component={TrackList} />
        <Stack.Screen name="TrackDetail" component={TrackDetail} />
      </Stack.Navigator>
    )
  }

  const MainFlow = () => {
    return (
      <Tab.Navigator shifting>
        <Tab.Screen
          name="TrackListFlow"
          component={TrackListFlow}
          options={{
            tabBarLabel: 'Track List',
            tabBarColor: Colors.blue800,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-list-outline"
                color={color}
                size={26}
              />
            )
          }}
        />
        <Tab.Screen
          name="CreateTrack"
          component={CreateTrack}
          options={{
            tabBarLabel: 'Create Track',
            tabBarColor: Colors.red800,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: Colors.green800,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cog-outline"
                color={color}
                size={26}
              />
            )
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <>
      {userSession === null ? null : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: false,
              headerShown: false
            }}
          >
            {userSession ? (
              <Stack.Screen name="MainFlow" component={MainFlow} />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  )
}

const RoutesContainer: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PaperProvider>
  )
}

export default RoutesContainer
