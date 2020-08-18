export interface SpacingProps {
  p?: number
  pr?: number
  pl?: number
  pt?: number
  pb?: number
  px?: number
  py?: number
  m?: number
  mr?: number
  ml?: number
  mt?: number
  mb?: number
  mx?: number
  my?: number
}

const spacing = (props: any): string => {
  return `
  ${props.pr ? `padding-right: ${props.pr * 8}px;` : ''}
  ${props.pt ? `padding-top: ${props.pt * 8}px;` : ''}
  ${props.pl ? `padding-left: ${props.pl * 8}px;` : ''}
  ${props.pb ? `padding-bottom: ${props.pb * 8}px;` : ''}
  ${props.px ? `padding-horizontal: ${props.px * 8}px;` : ''}
  ${props.py ? `padding-vertical: ${props.py * 8}px;` : ''}
  ${props.p ? `padding: ${props.p * 8}px;` : ''}
  ${props.mr ? `margin-right: ${props.mr * 8}px;` : ''}
  ${props.mt ? `margin-top: ${props.mt * 8}px;` : ''}
  ${props.ml ? `margin-left: ${props.ml * 8}px;` : ''}
  ${props.mb ? `margin-bottom: ${props.mb * 8}px;` : ''}
  ${props.mx ? `margin-horizontal: ${props.mx * 8}px;` : ''}
  ${props.my ? `margin-vertical: ${props.my * 8}px;` : ''}
  ${props.m ? `margin: ${props.m * 8}px;` : ''}`
}

export default spacing
