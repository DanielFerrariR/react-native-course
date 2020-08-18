import React from 'react'
import styled from 'styled-components/native'
import { TextProps } from 'react-native'
import {
  spacing,
  SpacingProps,
  typography,
  TypographyProps as OldTypographyProps,
  flexbox,
  FlexboxProps,
  palette,
  PaletteProps
} from 'src/styles/system'

export type TypographyProps = OldTypographyProps &
  TextProps &
  FlexboxProps &
  PaletteProps &
  SpacingProps &
  ExtraProps

interface ExtraProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4'
}

const StyledTypography = styled.Text`
  font-size: 16px;
  font-family: Roboto;
  ${(props: any) => (props.variant === 'h1' ? 'font-size: 24px;' : '')}
  ${(props: any) => (props.variant === 'h2' ? 'font-size: 20px;' : '')}
  ${(props: any) => (props.variant === 'h3' ? 'font-size: 14px;' : '')}
  ${(props: any) => (props.variant === 'h4' ? 'font-size: 12px;' : '')}
  ${spacing}
  ${typography}
  ${flexbox}
  ${palette}
`

const ThemedTypography: React.FC<TypographyProps> = ({ children, ...rest }) => {
  return <StyledTypography {...rest}>{children}</StyledTypography>
}

export default ThemedTypography
