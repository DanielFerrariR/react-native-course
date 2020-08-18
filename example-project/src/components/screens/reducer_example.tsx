import React, { useReducer } from 'react'
import { View, Text, Button } from 'react-native'

interface CountState {
  count: number
}

interface IncreaseCountAction {
  type: string
  payload: number
}

interface DecreaseCountAction {
  type: string
  payload: number
}

type CountActions = IncreaseCountAction | DecreaseCountAction

type Reducer = (state: CountState, action: CountActions) => CountState

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }

    default:
      return state
  }
}

const ReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer<Reducer>(reducer, { count: 0 })

  return (
    <View>
      <Text>Current Count: {state.count}</Text>
      <Button
        title="Increase counter"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button
        title="Decrease counter"
        onPress={() => dispatch({ type: 'decrement', payload: 1 })}
      />
    </View>
  )
}

export default ReducerExample
