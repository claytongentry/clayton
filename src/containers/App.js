import React, { Component } from 'react';

// Helpers
import { debounce } from '../utils'

// Components
import { Menu, MenuItem } from '../components'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      viewport: {}
    }
  }

  componentDidMount() {
    this.addResizeListener()
  }

  render() {
    return (
      <div>
        <Menu>
          <MenuItem label="Labels" href="#labels" />
          <MenuItem label="Pursuits" href="#pursuits" />
          <MenuItem label="Recommendations" href="#recommendations" />
        </Menu>
      </div>
    )
  }

  addResizeListener() {
    const onResize = () => this.setViewport()
    window.addEventListener("resize", debounce(onResize, 250))
    this.setViewport()
  }

  setViewport() {
    const { innerHeight, innerWidth } = window
    this.setState({ viewport: { innerHeight, innerWidth }})
  }
}

export default App
