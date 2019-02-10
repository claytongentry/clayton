import React, { Component } from 'react';

// Helpers
import { debounce } from '../utils'

// Components
import { Card, Menu, MenuItem, Text, Title } from '../components'

// Styles
import { APP_WHITE } from '../styles/colors'

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
        <Menu viewport={this.state.viewport}>
          <MenuItem label="Labels" href="#labels" />
          <MenuItem label="Pursuits" href="#pursuits" />
          <MenuItem label="Recommendations" href="#recommendations" />
        </Menu>

        {/* Banner Card */}
        <Card style={{ marginLeft: 110, marginRight: 110 }}>
          <Title style={{ color: APP_WHITE, fontSize: 120, marginLeft: 160 }}>
            HEY
          </Title>
          <Title style={{ color: APP_WHITE, fontSize: 36, textAlign: "center"}}>
            I'M CLAYTON
          </Title>
          <Text style={{ color: APP_WHITE, textAlign: "center" }}>
            I write software and drink coffee. And I’m all out of coffee.
          </Text>
          <Text style={{ fontSize: 10, color: APP_WHITE, textAlign: "center" }}>
            New York, NY
          </Text>
        </Card>
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
