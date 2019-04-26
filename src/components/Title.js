import React from 'react'

import { APP_WHITE } from '../styles/colors'

const Title = (props) => {
  return <h1 style={{ ...props.style }}>{props.children}</h1>
}

export default Title
