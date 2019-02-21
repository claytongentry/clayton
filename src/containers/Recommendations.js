import React, { Component } from 'react'

import { APP_WHITE, APP_DARK_BROWN } from '../styles/colors'

import { Card, Text } from '../components'

class Recommendations extends Component {

  constructor(props) {
    super(props)

    this.state = {
      recommendations: [
        {
          date: "January 8, 2017",
          person: "Vincent Cabansag",
          title: "Director of Technology at Clockwork Interactive",
          text: "Clayton is a talented and passionate individual. He's the kind of person you want to be around at work. He learns quickly and knows how to use his technical skills to solve real problems with technology. Clayton is dependable, seeks feedback, and has a strong attention to detail. He knows how to \"learn how to learn\", a skill that's essential in software development. I'd love the opportunity to work with Clayton again."
        },
        {
          date: "November 19, 2018",
          person: "Steve Marshall",
          title: "Co-Founder at Inverse, Sports Bet Collective",
          text: "Clayton is a rock solid engineer, a blast to collaborate with, and just an overall great dude.  That said, flawless hair is an occasional workplace distraction."
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.recommendations.map(r => <Recommendation {...r} />)}
      </div>
    )
  }
}

class Recommendation extends Component {

  render() {
    const { person, title, date, text } = this.props

    return (
      <Card className="rec">
        <Text className="rec-date">{date}</Text>
        <div style={{ padding: 10, textAlign: "center" }}>
          <Text className="rec-text">{text}</Text>
        </div>
        <Attribution person={person} title={title} />
      </Card>
    )
  }
}

const Attribution = ({ person, title }) =>
  <div className="rec-attr">
    <div>
      <Text style={{ color: APP_DARK_BROWN }}>{person},</Text>
      <Text />
      <Text style={{ color: APP_DARK_BROWN }}>{title}</Text>
    </div>
  </div>

export default Recommendations
