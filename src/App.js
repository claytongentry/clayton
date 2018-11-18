import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APP_BLACK = "#47525E"
const APP_WHITE = "#F7F7F7"

class App extends Component {
  render() {
    return (
      <div className="App container-fluid" style={{ padding: 0 }}>
        <div style={{ backgroundColor: APP_WHITE, display: "flex", justifyContent: "center", alignItems: "center", height: 500 }}>
          <img src="/assets/images/clayton.png" height={300} />
        </div>

        <Poll />

        <Section className="row" railLogo={"goes here"} title="I vibe with open-source." railLogo={<img src="/assets/images/github_logo.png" />}>
          <Card
            color="#f3ec80"
            title="Furlex"
            description={"Furlex is a structured data extraction tool written in Elixir. It supports unfurling oEmbed, Twitter Card, Facebook Open Graph, JSON-LD and plain ole HTML <meta /> data out of any url you supply."}
            action={<ActionButton color="#f3ec80" href="https://github.com/claytongentry/furlex" value="Open Project" />}
          />
          <Card
            color="#80d8f3"
            title="Spitbot"
            description={
              <p>Spitbot's a command-line robot that learns to rap using input you supply. I built it with my buddy <a href="http://github.com/ncmatson">Cameron Matson</a>. It's not a doctoral thesis in artificial intelligence, but I still think it's neat.</p>
            }
            action={<ActionButton color="#80d8f3" href="https://github.com/claytongentry/spitbot" value="Open Project" />}
          />

        </Section>
        <Section title="I prefer startups">
          <Card
            color="#f6c200"
            title="Inverse"
            description="Inverse is a media and entertainment company dedicated to sparking curiosity about the future."
          />
          <Card
            color="#f7f7f7"
            title="Thimble"
            description="In college, alongside five good friends, I built a platform to streamline interaction between independent fashion designers and boutique owners. The company did not survive. The friendships did."
          />
        </Section>
        <Section title="I'm learned">
          <Card
            color="#59118e"
            invert={true}
            title="Northwestern '17"
          />
        </Section>
        <Section title="I'm easy to contact.">

        </Section>
      </div>
    );
  }
}

class Poll extends Component {

  render() {
    return (
      <div class="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div className="col-md-6" style={{ alignItems: "center", backgroundColor: "#EF464B", display: "flex", justifyContent: "center", minHeight: 300, padding: 50 }}>
          <h1 style={{ color: "white", fontFamily: "Oswald", fontWeight: 900 }}>
            “How much better is silence; the coffee cup, the table. How much better to sit by myself like the solitary sea-bird that opens its wings on the stake. Let me sit here for ever with bare things, this coffee cup, this knife, this fork, things in themselves, myself being myself.”
          </h1>
        </div>
        <div className="col-md-6" style={{ backgroundColor: APP_BLACK }}/>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: APP_BLACK,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 50,
  marginRight: "auto",
  marginTop: 10,
  maxWidth: 400,
  marginLeft: "auto",
  boxShadow: "2px 2px 3px #333"
}

const ActionButton = props =>
  <a href={props.href} target="_blank">
    <div style={btnStyle}>
      <p style={{ color: props.color, fontFamily: "Oswald" }}>{props.value}</p>
    </div>
  </a>



class Section extends Component {

  render() {
    return (
      <div style={{ backgroundColor: APP_BLACK, textAlign: "center" }}>
        <SectionHeader value={this.props.title} />
        <div className="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="d-none d-md-block col-md-5 d-md-flex" style={{
              backgroundColor: APP_BLACK,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
          }}>
            {this.props.railLogo}
          </div>
          <div className="col-md-7" style={{ display: "flex", flexDirection: "column", padding: 0 }}>
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
  padding: 40, paddingLeft: 60, paddingRight: 60
}

class Card extends Component {

  render() {
    const color = this.props.invert ? APP_WHITE : APP_BLACK

    return (
      <div style={{...cardStyle, backgroundColor: this.props.color }}>
        <h1 style={{ color, fontFamily: "Oswald", fontWeight: 900 }}>{this.props.title}</h1>
        <p style={{
          color,
          fontFamily: "Oswald", fontWeight: 300
          }}>{this.props.description}</p>
        {this.props.action}
      </div>
    )
  }
}

export default App;
