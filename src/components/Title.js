import React from 'react'

import { APP_WHITE } from '../styles/colors'

const styles = {
  color: APP_WHITE,
  fontFamily: 'Allerta Stencil',
  fontWeight: 700
}

const Title = (props) => {
  return <p style={{...styles, ...props.style }}>{props.children}</p>
}

export default Title
