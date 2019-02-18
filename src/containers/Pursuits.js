import React, { Component } from 'react'

import { Card, Text, Title } from '../components'

class Pursuits extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pursuits: [
        {
          title: "Inverse",
          body: [
            {
              type: "graf",
              text: "Inverse is a media and entertainment site dedicated to sparking curiosity about the future."
            },
            {
              type: "graf",
              text: "For three years, I've worked with a small but all-star engineering team to build infrastructure that handles tens of millions of pageviews every month without breaking a sweat."
            }
          ],
          link: "https://www.inverse.com"
        },
        {
          title: "Watch Design",
          body: [
            {
              type: "graf",
              text: "I love designing watches, and visual design generally. Here's one I designed recently, inspired by a trip to Naples, Florida."
            },
            {
              type: "image",
              link: "https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg",
              alt: "cat"
            },
            {
              type: "graf",
              text: "My 2019 New Year's Resolution is to actually make one."
            }
          ]
        },
        {
          title: "Open Source",
          body: []
        }
      ]
    }
  }

  render() {
    return (
      <div className="row">
        {this.state.pursuits.map(p => <PursuitCard {...p} />)}
      </div>
    )
  }
}

const PursuitCard = ({title, body}) =>
  <Card className="col-md-4 col-sm-12" style={{ flex: 1, alignItems: "center", margin: 10, padding: 20 }}>
    <Title>{title}</Title>
    {body.map(el => <PursuitCardSection {...el} />)}
  </Card>

const PursuitCardSection = (props) => {
  if (props.type === "graf") {
    return <Text>{props.text}</Text>
  } else if (props.type === "image") {
    return <img src={props.link} alt={props.alt} style={{ maxWidth: "100%" }} />
  }
}

export default Pursuits
