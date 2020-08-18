import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native-paper'
import { spacing, SpacingProps } from 'src/styles/system'
import { ViewStyle, StyleProp } from 'react-native'
import { theme } from 'src/styles'

interface OldActivityIndicatorProps {
  /**
   * Whether to show the indicator or hide it.
   */
  animating?: boolean
  /**
   * The color of the spinner.
   */
  color?: string
  /**
   * Size of the indicator.
   */
  size?: 'small' | 'large' | number
  /**
   * Whether the indicator should hide when not animating.
   */
  hidesWhenStopped?: boolean
  style?: StyleProp<ViewStyle>
  /**
   * @optional
   */
  theme?: ReactNativePaper.Theme
}

export type ActivityIndicatorProps = OldActivityIndicatorProps & SpacingProps

const StyledActivityIndicator = styled(ActivityIndicator)`
  ${spacing}
`

const ThemedActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  color,
  children,
  ...rest
}) => {
  const splitColor = color?.split('.')
  let finalColor

  if (splitColor) {
    finalColor = theme.colors as any

    for (const eachColor of splitColor) {
      finalColor = finalColor[eachColor]
    }
  }

  return (
    <StyledActivityIndicator color={finalColor} {...rest}>
      {children}
    </StyledActivityIndicator>
  )
}

export default ThemedActivityIndicator
