import React, { Component } from 'react'
import { Card, Text } from '../components'
import { APP_WHITE } from '../styles/colors'

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card className='card banner'>
          <div>
            <h1 id='hey'>Hello, </h1>
            <h1 id='clayton'>I'm Clayton.</h1>
          </div>

          <Text style={{ textAlign: 'center', fontSize: 14 }}>
            I’m an experienced software engineer interested in designing,
            scaling and simplifying modern web systems.
          </Text>
          <Text style={{ fontSize: 14, color: APP_WHITE, textAlign: 'center' }}>
            New York, NY
          </Text>

          <div id='iconsContainer'>
            <Icon
              name='fa-linkedin-in'
              href='https://www.linkedin.com/in/clayton-gentry-6492588a/'
            />

            <Icon name='fa-github' href='https://github.com/claytongentry/' />

            <Icon
              name='fa-instagram'
              href='https://www.instagram.com/cg3ntry'
            />

            <Icon name='fas fa-envelope' href='mailto:cg3ntry@gmail.com' />
          </div>
        </Card>
      </div>
    )
  }
}

const Icon = (props) => (
  <a href={props.href} target='_blank' rel='noopener noreferrer'>
    <i className={`fab ${props.name} fa-2x`} style={{ color: APP_WHITE }} />
  </a>
)

export default App
