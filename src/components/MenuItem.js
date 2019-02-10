import React, { Component } from 'react'

import { APP_WHITE } from '../styles/colors'
import Text from './Text'

const style = {
  display: "inline"
}

export default class MenuItem extends Component {
  render() {
    const { href, label } = this.props

    return (
      <li style={style}>
        <a href={href}>
          <Text style={{ color: APP_WHITE }}>{label}</Text>
        </a>
      </li>
    )
  }
}
