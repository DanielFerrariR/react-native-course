import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, Button } from 'react-native'

interface Props {
  colorName: string
  color: number
  setColor: Dispatch<SetStateAction<number>>
}

const COLOR_INCREMENT = 15

const ColorCounter: React.FC<Props> = ({ colorName, color, setColor }) => {
  const increaseColor = () => {
    if (color + COLOR_INCREMENT <= 255) {
      setColor(color + COLOR_INCREMENT)
    }
  }

  const decreaseColor = () => {
    if (color - COLOR_INCREMENT >= 0) {
      setColor(color - COLOR_INCREMENT)
    }
  }

  return (
    <View>
      <Text>{colorName}</Text>
      <Button title={`Increase ${colorName}`} onPress={increaseColor} />
      <Button title={`Decrease ${colorName}`} onPress={decreaseColor} />
    </View>
  )
}

export default ColorCounter
