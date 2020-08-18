import { theme } from 'src/styles'

export interface PaletteProps {
  color?: string
  bgColor?: string
}

const palette = (props: any): string => {
  const splitColor = props.color?.split('.')
  const splitBgColor = props.bgColor?.split('.')
  let finalColor
  let finalBgColor

  if (splitColor) {
    finalColor = theme.colors as any

    for (const color of splitColor) {
      finalColor = finalColor[color]
    }
  }

  if (splitBgColor) {
    finalBgColor = theme.colors as any

    for (const color of splitBgColor) {
      finalBgColor = finalBgColor[color]
    }
  }

  return `
  ${props.color ? `color: ${finalColor};` : ''}
  ${props.bgColor ? `background-color: ${finalBgColor};` : ''}
  `
}

export default palette
