import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'

interface Props {
  title: string
  imageSource: ImageSourcePropType
  score: number
}

const ImageDetail: React.FC<Props> = ({ score, title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score {score}</Text>
    </View>
  )
}

export default ImageDetail
