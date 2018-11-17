import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APP_BLACK = "#47525E"
const APP_WHITE = "#F7F7F7"

class App extends Component {
  render() {
    return (
      <div className="App container-fluid" style={{ padding: 0 }}>
        {/*header*/}
        {/*poll*/}

        <Section className="row" railLogo={"goes here"} title="I vibe with open-source.">
          <Card
            color="#f3ec80"
            title="Furlex"
            description={"Furlex is a structured data extraction tool written in Elixir. It supports unfurling oEmbed, Twitter Card, Facebook Open Graph, JSON-LD and plain ole HTML <meta /> data out of any url you supply."}
            action={<ActionButton href="https://github.com/claytongentry/furlex" value="Open Project" />}
          />
          <Card
            color="#80d8f3"
            title="Spitbot"
            description={
              <p>Spitbot's a command-line robot that learns to rap using input you supply. I built it with my buddy <a href="http://github.com/ncmatson">Cameron Matson</a>. It's not a doctoral thesis in artificial intelligence, but I still think it's neat.</p>
            }
            action={<ActionButton href="https://github.com/claytongentry/furlex" value="Open Project" />}
          />

        </Section>
        <Section title="I prefer startups">

        </Section>
        <Section title="I'm learned">

        </Section>
        <Section title="I'm easy to contact.">

        </Section>
      </div>
    );
  }
}

const btnStyle = {
  backgroundColor: APP_BLACK,
  borderRadius: 20,
  marginRight: "auto",
  maxWidth: 500,
  marginLeft: "auto"
}

const ActionButton = props =>
  <a href={props.href}>
    <div style={btnStyle}>
      <p>{props.value}</p>
    </div>
  </a>



class Section extends Component {

  render() {
    return (
      <div style={{ backgroundColor: APP_BLACK, textAlign: "center" }}>
        <SectionHeader value={this.props.title} />
        <div className="row">
          <div className="d-none d-md-block col-md-4 d-md-flex" style={{
              backgroundColor: APP_BLACK,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
          }}>
            <img src="/assets/images/github_logo.png" />
          </div>
          <div className="col-md-8" style={{ display: "flex", flexDirection: "column" }}>
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}

const SectionHeader = props =>
  <div style={{ padding: 20 }}>
    <h2 style={{ color: APP_WHITE, fontFamily: "Oswald", fontWeight: 900 }}>
      {props.value}
    </h2>
  </div>


const cardStyle = {
  margin: 0,
  padding: 40
}

class Card extends Component {

  render() {
    return (
      <div style={{...cardStyle, backgroundColor: this.props.color}}>
        <h1 style={{ fontFamily: "Oswald" }}>{this.props.title}</h1>
        <p style={{ fontFamily: "Oswald", fontWeight: 300 }}>{this.props.description}</p>
        {this.props.action}
      </div>
    )
  }
}

export default App;
