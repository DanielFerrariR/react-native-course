import React from 'react'
import styled from 'styled-components/native'
import { ViewProps as OldViewProps } from 'react-native'
import {
  sizing,
  SizingProps,
  spacing,
  SpacingProps,
  flexbox,
  FlexboxProps,
  borders,
  BordersProps,
  position,
  PositionProps,
  palette,
  PaletteProps,
  display,
  DisplayProps
} from 'src/styles/system'

export type BoxProps = OldViewProps &
  SizingProps &
  SpacingProps &
  FlexboxProps &
  BordersProps &
  PaletteProps &
  PositionProps &
  DisplayProps &
  ExtraProps

interface ExtraProps {
  elevation?: number
}

const StyledBox = styled.View`
  ${sizing}
  ${spacing}
  ${flexbox}
  ${borders}
  ${position}
  ${palette}
  ${display}
`

const ThemedBox: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>
}

export default ThemedBox
