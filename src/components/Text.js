import React from 'react'

import { APP_WHITE } from '../styles/colors'

const styles = {
  color: APP_WHITE,
  fontFamily: "Nunito",
  fontWeight: 300
}

const Text = (props) => {
  return <p style={{...styles, ...props.style }}>{props.children}</p>
}

export default Text
