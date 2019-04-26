import React, { Component } from 'react'

// Components
import { Card, Title } from '../components'

class Labels extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rows: [
        ["NYC", "5-STAR UBER RATING"],
        ["#GOCUBSGO", "#NORTHWESTERN '17"],
        ["ELIXIR", "NETFLIX DOCUSERIES"],
        ["JAVASCRIPT"]
      ]
    }
  }

  render() {
    return (
      <div className="container labels_container">
        {this.state.rows.map((row) =>
          <div className="row">
            {row.map(label => <Label text={label} />)}
          </div>
        )}
      </div>
    )
  }
}

const Label = ({ text }) => {

  return (
    <Card className="label col-md-6 col-sm-12">
      <h2>{text}</h2>
    </Card>
  )
}


export default Labels
