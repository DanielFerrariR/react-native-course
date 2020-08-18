import React from 'react'
import styled from 'styled-components/native'
import { sizing, SizingProps, spacing, SpacingProps } from 'src/styles/system'
import { TextInput } from 'react-native-paper'
import { StyleProp, TextStyle } from 'react-native'
import { RenderProps } from 'react-native-paper/lib/typescript/src/components/TextInput/types'

interface OldTextInputProps {
  secureTextEntry?: boolean
  /**
   * Mode of the TextInput.
   * - `flat` - flat input with an underline.
   * - `outlined` - input with an outline.
   *
   * In `outlined` mode, the background color of the label is derived from `colors.background` in theme or the `backgroundColor` style.
   * This component render TextInputOutlined or TextInputFlat based on that props
   */
  mode?: 'flat' | 'outlined'
  left?: React.ReactNode
  right?: React.ReactNode
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled?: boolean
  /**
   * The text to use for the floating label.
   */
  label?: string
  /**
   * Placeholder for the input.
   */
  placeholder?: string
  /**
   * Whether to style the TextInput with error style.
   */
  error?: boolean
  /**
   * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
   */
  onChangeText?: (text: string) => void
  /**
   * Selection color of the input
   */
  selectionColor?: string
  /**
   * Underline color of the input.
   */
  underlineColor?: string
  /**
   * Sets min height with densed layout. For `TextInput` in `flat` mode
   * height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
   * For `TextInput` in `outlined` mode
   * height is `56dp` or in dense layout - `40dp` regardless of label.
   * When you apply `heigh` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput`
   */
  dense?: boolean
  /**
   * Whether the input can have multiple lines.
   */
  multiline?: boolean
  /**
   * The number of lines to show in the input (Android only).
   */
  numberOfLines?: number
  /**
   * Callback that is called when the text input is focused.
   */
  onFocus?: (args: any) => void
  /**
   * Callback that is called when the text input is blurred.
   */
  onBlur?: (args: any) => void
  /**
   *
   * Callback to render a custom input component such as `react-native-text-input-mask`
   * instead of the default `TextInput` component from `react-native`.
   *
   * Example:
   * ```js
   * <TextInput
   *   label="Phone number"
   *   render={props =>
   *     <TextInputMask
   *       {...props}
   *       mask="+[00] [000] [000] [000]"
   *     />
   *   }
   * />
   * ```
   */
  render?: (props: RenderProps) => React.ReactNode
  /**
   * Value of the text input.
   */
  value?: string
  /**
   * Pass `fontSize` prop to modify the font size inside `TextInput`.
   * Pass `height` prop to set `TextInput` height. When `height` is passed,
   * `dense` prop will affect only input's `paddingVertical`.
   * Pass `paddingHorizontal` to modify horizontal padding.
   * This can be used to get MD Guidelines v1 TextInput look.
   */
  style?: StyleProp<TextStyle>
  /**
   * @optional
   */
  theme?: ReactNativePaper.Theme
}

export type TextInputProps = OldTextInputProps & SizingProps & SpacingProps

const StyledTextInput: any = styled(TextInput)`
  ${sizing};
  ${spacing};
`

const ThemedTextInput: React.FC<TextInputProps> = (props) => {
  return <StyledTextInput mode="outlined" {...props} />
}

export default ThemedTextInput
