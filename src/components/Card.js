import React from 'react'

import { APP_DARK_BROWN } from '../styles/colors'

const styles = {
  backgroundColor: APP_DARK_BROWN,
  borderRadius: 25
}

const Card = (props) => {
  return <div style={{...styles, ...props.style}}>{props.children}</div>
}

export default Card
