import React from 'react'

const styles = {
  fontFamily: 'Allerta Stencil',
  fontWeight: 700
}

const Title = (props) => {
  return <p style={{...styles, ...props.style }}>{props.children}</p>
}

export default Title
