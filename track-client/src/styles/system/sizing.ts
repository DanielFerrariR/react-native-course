export interface SizingProps {
  width?: number
  maxWidth?: number
  minWidth?: number
  height?: number
  maxHeight?: number
  minHeight?: number
}

const sizing = (props: any): string => {
  return `
  ${
    props.width
      ? `width: ${
          props.width <= 1 ? `${props.width * 100}%` : `${props.width}px`
        };`
      : ''
  }
 ${
   props.maxWidth
     ? `max-width: ${
         props.maxWidth <= 1
           ? `${props.maxWidth * 100}%`
           : `${props.maxWidth}px`
       };`
     : ''
 }
  ${
    props.minWidth
      ? `min-width: ${
          props.minWidth <= 1
            ? `${props.minWidth * 100}%`
            : `${props.minWidth}px`
        };`
      : ''
  }
 ${
   props.height
     ? `height: ${
         props.height <= 1 ? `${props.height * 100}%` : `${props.height}px`
       };`
     : ''
 }
   ${
     props.maxHeight
       ? `max-height: ${
           props.maxHeight <= 1
             ? `${props.maxHeight * 100}%`
             : `${props.maxHeight}px`
         };`
       : ''
   }
 ${
   props.minHeight
     ? `minHeight: ${
         props.minHeight <= 1
           ? `${props.minHeight * 100}%`
           : `${props.minHeight}px`
       };`
     : ''
 }
  `
}

export default sizing
