import React from 'react'
import { View } from 'react-native'
import { ImageDetail } from '../molecules'

const ImageExample: React.FC = () => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        imageSource={require('../../images/beach.jpg')}
        score={1}
      />
      <ImageDetail
        title="Forest"
        imageSource={require('../../images/forest.jpg')}
        score={5}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../images/mountain.jpg')}
        score={10}
      />
    </View>
  )
}

export default ImageExample
