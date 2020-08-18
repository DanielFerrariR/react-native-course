import React from 'react'
import Box, { BoxProps } from './box'

const Container: React.FC<BoxProps> = (props) => {
  return <Box flex={1} bgColor="background" {...props} />
}

export default Container
