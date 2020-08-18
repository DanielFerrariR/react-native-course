export interface TypographyProps {
  fontFamily?: string
  fontSize?: number
  fontStyle?: 'normal' | 'italic'
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  lineHeight?: number
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
}

const spacing = (props: any): string => {
  return `
  ${props.fontFamily ? `font-family: ${props.fontFamily};` : ''}
  ${props.fontSize ? `font-size: ${props.fontSize}px;` : ''}
  ${props.fontStyle ? `font-style: ${props.fontStyle};` : ''}
  ${props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
  ${props.lineHeight ? `line-height: ${props.lineHeight}px;` : ''}
  ${props.textAlign ? `text-align: ${props.textAlign};` : ''}
  ${props.textTransform ? `text-transform: ${props.textTransform};` : ''}
  `
}

export default spacing
