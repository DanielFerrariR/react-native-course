export interface DisplayProps {
  display?: 'none' | 'flex'
  overflow?: 'visible' | 'hidden'
}

const display = (props: any): string => {
  return `
  ${props.display ? `display: ${props.display};` : ''}
  ${props.overflow ? `overflow: ${props.overflow};` : ''}
  `
}

export default display
