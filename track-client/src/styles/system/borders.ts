import { theme } from 'src/styles'

export interface BordersProps {
  borderRadius?: number
  borderWidth?: number
  borderColor?: string
  borderTopWidth?: number
  BorderTopColor?: string
  borderLeftWidth?: number
  BorderLeftColor?: string
  borderBottomWidth?: number
  BorderBottomColor?: string
  borderRightWidth?: number
  BorderRightColor?: string
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderStyle?: 'solid' | 'dotted' | 'dashed'
}

const borders = (props: any): string => {
  const splitBorderColor = props.borderColor?.split('.')
  let finalBorderColor = theme.colors as any

  if (splitBorderColor) {
    for (const color of splitBorderColor) {
      finalBorderColor = finalBorderColor[color]
    }
  }

  return `
  ${props.borderRadius ? `border-radius: ${props.borderRadius}px;` : ''}
  ${props.borderWidth ? `border-width: ${props.borderWidth}px;` : ''}
  ${props.borderColor ? `border-color: ${finalBorderColor};` : ''}
  ${props.borderTopWidth ? `border-top-width: ${props.borderTopWidth}px;` : ''}
  ${props.borderTopColor ? `border-top-color: ${props.borderTopColor}px;` : ''}
  ${
    props.borderLeftWidth
      ? `border-left-width: ${props.borderLeftWidth}px;`
      : ''
  }
  ${
    props.borderLeftColor
      ? `border-left-color: ${props.borderLeftColor}px;`
      : ''
  }
  ${
    props.borderBottomWidth
      ? `border-bottom-width: ${props.borderBottomWidth}px;`
      : ''
  }
  ${
    props.borderBottomColor
      ? `border-bottom-color: ${props.borderBottomColor}px;`
      : ''
  }
  ${
    props.borderRightWidth
      ? `border-right-width: ${props.borderRightWidth}px;`
      : ''
  }
  ${
    props.borderRightColor
      ? `border-right-width: ${props.borderRightColor}px;`
      : ''
  }
  ${
    props.borderTopRightRadius
      ? `border-top-right-radius: ${props.borderTopRightRadius}px;`
      : ''
  }
  ${
    props.borderTopLeftRadius
      ? `border-top-left-radius: ${props.borderTopLeftRadius}px;`
      : ''
  }
  ${
    props.borderBottomLeftRadius
      ? `border-bottom-left-radius: ${props.borderBottomLeftRadius}px;`
      : ''
  }
  ${
    props.borderBottomRightRadius
      ? `border-bottom-right-radius: ${props.borderBottomRightRadius}px;`
      : ''
  }
  ${props.borderStyle ? `border-style: ${props.borderStyles};` : ''}
  `
}

export default borders
