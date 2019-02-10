import React, { Component } from 'react'

const styles = {}

export default class Menu extends Component {

  render() {
    return (
      <ul style={styles}>
        {this.props.children}
      </ul>
    )
  }
}
