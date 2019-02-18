import React, { Component } from 'react';

// Containers
import Labels from './Labels'
import Pursuits from './Pursuits'
import Recommendations from './Recommendations'

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
          <Title style={{ fontSize: 120, marginLeft: 160 }}>
            HEY,
          </Title>
          <Title style={{ fontSize: 36, textAlign: "center"}}>
            I'M CLAYTON.
          </Title>
          <Text style={{ textAlign: "center" }}>
            I write software and drink coffee.<br/>And I’m all out of coffee.
          </Text>
          <Text style={{ fontSize: 10, color: APP_WHITE, textAlign: "center" }}>
            New York, NY
          </Text>

          <div style={{ textAlign: "center" }}>
            <Icon
              name="fa-linkedin-in"
              href="https://www.linkedin.com/in/clayton-gentry-6492588a/"
            />

            <Icon
              name="fa-github"
              href="https://github.com/claytongentry/"
            />

            <Icon
              name="fa-instagram"
              href="https://www.instagram.com/cg3ntry"
            />

            <Icon
              name="fas fa-envelope"
              href="mailto:cg3ntry@gmail.com"
            />

          </div>

        </Card>

        <Section title="LABELS" body={<Labels/>} />
        <Section title="PURSUITS" body={<Pursuits />}/>
        <Section title="RECOMMENDATIONS" body={<Recommendations />} />
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

const Icon = (props) =>
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <i className={`fab ${props.name} fa-2x`} style={{ color: APP_WHITE, padding: 50 }}/>
  </a>

class Section extends Component {

  render() {
    const { title, body } = this.props
    const id = this.getSectionId(title)

    return (
      <div id={id} style={{ margin: 40, marginLeft: "auto", marginRight: "auto", maxWidth: 750}}>
        <Title style={{ fontSize: 24, textAlign: "center", marginBottom: 10 }}>{title}</Title>
        {body}
      </div>
    )
  }

  getSectionId(title) {
    return title.toLowerCase()
  }
}


export default App
