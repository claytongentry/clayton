import React, { Component } from 'react';

// Components
import { Card, Text } from '../components'

// Styles
import { APP_WHITE } from '../styles/colors'

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Card className="card banner">
          <div>
            <h1 id="hey">Hello, </h1>
            <h1 id="clayton">I'm Clayton.</h1>
          </div>

          <Text style={{ textAlign: "center", fontSize: 14 }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm#chap13">Think you're escaping and run into yourself. Longest way round is the shortest way home.</a>
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
}

const Icon = (props) =>
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <i className={`fab ${props.name} fa-2x`} style={{ color: APP_WHITE }}/>
  </a>

export default App
