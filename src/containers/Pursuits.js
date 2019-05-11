import React, { Component } from 'react'

import { Card, Text, Title } from '../components'

class Pursuits extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pursuits: null
    }
  }

  componentDidMount() {
    fetch("data/pursuits.json")
    .then(resp => resp.json())
    .then(pursuits => this.setState({ pursuits }))
    .catch(err => console.error(err))
  }

  render() {
    const { pursuits } = this.state

    if (!pursuits) {
      return null
    }

    return (
      <div className="row">
        {
          pursuits.map(p =>
            <PursuitCard {...p} />
          )
        }
      </div>
    )
  }
}

const PursuitCard = ({title, body, link}) =>
  <Card className="pursuit col-md-4 col-sm-12">
    <h2 className=".thin">{title}</h2>
    {body.map(el => <PursuitCardSection {...el} />)}
    {link ? <Out link={link} /> : null}
  </Card>

const PursuitCardSection = (props) => {
  switch (props.type) {
    case "graf":
      return <Text>{props.text}</Text>

    case "image":
      return <img alt={props.alt} src={props.link} />
  }
}

const Out = ({ link }) =>
  <a href={link} target="_blank" className="outBtn">
    <OutChevron />
  </a>

const OutChevron = props =>
  <i className="fas fa-chevron-right"></i>

export default Pursuits
