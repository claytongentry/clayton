import React from 'react'

import { APP_WHITE } from '../styles/colors'

const styles = {
  color: APP_WHITE,
  fontFamily: "Nunito",
  fontWeight: 300
}

const Text = (props) => {
  const { className, style } = props
  return (
    <p style={{...styles, ...style }} className={className}>
      {props.children}
    </p>
  )
}

export default Text
