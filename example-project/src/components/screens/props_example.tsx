import React, { useState } from 'react'
import { View } from 'react-native'
import { ColorCounter } from '../molecules'

const PropsExample: React.FC = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  return (
    <View>
      <ColorCounter color={red} setColor={setRed} colorName="Red" />
      <ColorCounter color={blue} setColor={setBlue} colorName="Blue" />
      <ColorCounter color={green} setColor={setGreen} colorName="Green" />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  )
}

export default PropsExample
