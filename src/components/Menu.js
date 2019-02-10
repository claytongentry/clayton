import React, { Component } from 'react'


import { MOBILE_BREAK } from '../styles/breakpoints'
import { APP_WHITE }    from '../styles/colors'

import Text from './Text'

const styles = {

}

export default class Menu extends Component {

  render() {
    console.log(this.props.viewport)
    if (this.props.viewport.innerWidth < MOBILE_BREAK) {
      return <MobileMenu {...this.props} />
    } else {
      return <DesktopMenu {...this.props} />
    }
  }
}

class MobileMenu extends Component {

  render() {
    return <Text style={{ color: APP_WHITE }}>mobile todo</Text>
  }
}

class DesktopMenu extends Component {

  render() {
    return (
      <ul style={styles}>
        {this.props.children}
      </ul>
    )
  }
}
