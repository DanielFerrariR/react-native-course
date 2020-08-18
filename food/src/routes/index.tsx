import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchScreen, ResultsShowScreen } from 'src/components/screens'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{ title: 'Business Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
