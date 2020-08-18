import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  ImageExample,
  InputExample,
  ListExample,
  NavigateExample,
  PropsExample,
  ReducerExample,
  StateExample,
  StyleExample,
  LayoutExample
} from '../components/screens'

const navigator = createStackNavigator(
  {
    ImageExample,
    InputExample,
    ListExample,
    NavigateExample,
    PropsExample,
    ReducerExample,
    StateExample,
    StyleExample,
    LayoutExample
  },
  {
    initialRouteName: 'NavigateExample',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator)
