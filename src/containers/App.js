import React, { Component } from 'react';

// Helpers
import { debounce } from '../utils'

// Components
import { Menu, MenuItem } from '../components'

class App extends Component {

  constructor(props) {
    super(props)

    this.resize = this.resize.bind(this)

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
    console.log("adding resize listener...")
    window.addEventListener("resize", this.resize)
    // this.resize()
  }

  resize() {
    const setViewport = () => {
      console.log("set viewport")
      const { height, width } = window
      this.setState({ viewport: { height, width }})
    }

    console.log("maybe running")
    debounce(setViewport, 250)
  }
}

export default App
