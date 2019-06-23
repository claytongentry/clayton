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
      <div style={{ marginTop: 40, minHeight: "100vh" }}>

        <div id="pic">
          <img src="./images/clayton_no_bg.png" style={{ borderRadius: "inherit" }} />
        </div>

        {/* Banner Card */}
        <Card className="card banner">
          <div>
            <h1 id="hey">HEY, </h1>
            <h1 id="clayton">I'M CLAYTON.</h1>
          </div>

          <Text style={{ textAlign: "center", fontSize: 14 }}>
            I write software and drink coffee.<br/>And I’m all out of coffee.
          </Text>
          <Text style={{ fontSize: 14, color: APP_WHITE, textAlign: "center" }}>
            New York, NY
          </Text>

          <div id="iconsContainer">
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
      </div>
    )
  }

  // <Section title="PURSUITS" body={<Pursuits />}/>
  // <Section title="LABELS" body={<Labels/>} />
  // <Section title="RECOMMENDATIONS" body={<Recommendations />} />

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
    <i className={`fab ${props.name} fa-2x`} style={{ color: APP_WHITE }}/>
  </a>

class Section extends Component {

  render() {
    const { title, body } = this.props
    const id = this.getSectionId(title)

    return (
      <div id={id} style={{ marginTop: 40 }}>
        {body}
      </div>
    )
  }

  getSectionId(title) {
    return title.toLowerCase()
  }
}


export default App
