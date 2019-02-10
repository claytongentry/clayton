import React from 'react'

const styles = {
  fontFamily: "Nunito"
}

const Text = (props) => {
  return <p style={{...styles, ...props.style }}>{props.children}</p>
}

export default Text
