import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacityProps as OldTouchableOpacityProps } from 'react-native'
import { spacing, SpacingProps, sizing, SizingProps } from 'src/styles/system'

export type TouchableOpacityProps = OldTouchableOpacityProps &
  SpacingProps &
  SizingProps

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${spacing}
  ${sizing}
`

const ThemedTouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  ...rest
}) => {
  return <StyledTouchableOpacity {...rest}>{children}</StyledTouchableOpacity>
}

export default ThemedTouchableOpacity
