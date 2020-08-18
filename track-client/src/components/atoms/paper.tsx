import React from 'react'
import Box, { BoxProps } from './box'

const Paper: React.FC<BoxProps> = (props) => {
  return <Box elevation={1} bgColor="surface" {...props} />
}

export default Paper
