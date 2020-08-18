export interface FlexboxProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flexWrap?: 'wrap' | 'nowrap'
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  flex?: number
  flexGrow?: number
  flexShrink?: number
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'
}

const flexbox = (props: any): string => {
  return `
  ${props.flexDirection ? `flex-direction: ${props.flexDirection};` : ''}
  ${props.flexWrap ? `flex-wrap: ${props.flexWrap};` : ''}
  ${props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${props.alignItems ? `align-items: ${props.alignItems};` : ''}
  ${props.flex ? `flex: ${props.flex};` : ''}
  ${props.flexGrow ? `flex-grow: ${props.flexGrow};` : ''}
  ${props.flexShrink ? `flex-shrink: ${props.flexShrink};` : ''}
  ${props.alignSelf ? `align-self: ${props.alignSelf};` : ''}
  `
}

export default flexbox
