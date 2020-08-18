export interface PositionProps {
  position?: 'relative' | 'absolute'
  zIndex?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const position = (props: any): string => {
  return `
  ${props.position ? `position: ${props.position};` : ''}
  ${props.zIndex ? `z-index: ${props.zIndex};` : ''}
  ${props.top ? `top: ${props.top};` : ''}
  ${props.right ? `right: ${props.right};` : ''}
  ${props.bottom ? `max-height: ${props.bottom};` : ''}
  ${props.left ? `left: ${props.left};` : ''}
  `
}

export default position
