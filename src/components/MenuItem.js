import React, { Component } from 'react'

import { APP_WHITE } from '../styles/colors'
import Text from './Text'

const style = {
  display: "inline-block",
  marginLeft: 50,
  marginTop: 50
}

export default class MenuItem extends Component {
  render() {
    const { href, label } = this.props

    return (
      <li style={style} onClick={() => window.location.hash = href} className="menu-item">
        <Text style={{ color: APP_WHITE }}>{label}</Text>
      </li>
    )
  }
}
