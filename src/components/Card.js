import React from 'react'

import { APP_DARK_BROWN } from '../styles/colors'

const styles = {
  backgroundColor: APP_DARK_BROWN,
  borderRadius: 25
}

const Card = (props) => {
  const style = {...styles, ...props.style}
  const className = `card ${props.className}`
  return <div style={style} className={className}>{props.children}</div>
}

export default Card
