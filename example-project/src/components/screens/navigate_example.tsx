import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

interface NavigationParams {
  params: string
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

interface Props {
  navigation: Navigation
}

const NavigateExample: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('StyleExample')}
        title="Go to Style Example"
      />
      <Button
        onPress={() => navigation.navigate('ListExample')}
        title="Go to List Example"
      />
      <Button
        onPress={() => navigation.navigate('ImageExample')}
        title="Go to Image Example"
      />
      <Button
        onPress={() => navigation.navigate('ReducerExample')}
        title="Go to Reducer Example"
      />
      <Button
        onPress={() => navigation.navigate('StateExample')}
        title="Go to State Example"
      />
      <Button
        onPress={() => navigation.navigate('PropsExample')}
        title="Go to Props Example"
      />
      <Button
        onPress={() => navigation.navigate('InputExample')}
        title="Go to Input Example"
      />
      <Button
        onPress={() => navigation.navigate('LayoutExample')}
        title="Go to Layout Example"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default NavigateExample
