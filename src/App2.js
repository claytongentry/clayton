import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APP_BLACK = "#47525E"
const APP_WHITE = "#F7F7F7"
const APP_RED   = "#EF464B"

const styles = {
  container: {
    padding: 0
  },
  h1: {
    color: APP_BLACK,
    fontFamily: "Oswald",
    fontWeight: 900
  },
  a: {
    color: APP_BLACK,
    textDecoration: "none"
  },
  btn: {
    backgroundColor: APP_BLACK,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginRight: "auto",
    marginTop: 10,
    width: 250,
    marginLeft: "auto",
    boxShadow: "2px 2px 3px #333"
  },
  underline: {
    borderBottom: `5px solid ${APP_BLACK}`,
    display: "inline-block",
    lineHeight: 1.4
  },
  headerContainer: {
    alignItems: "center",
    backgroundColor: APP_WHITE,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  contactContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  hi: {
    fontSize: 240
  },
  logoBg: {
    alignItems: "center",
    backgroundColor: APP_BLACK,
    color: "white",
    display: "flex",
    justifyContent: "center"
  },
  openSource: {
    display: "flex",
    flexDirection: "column",
    padding: 0
  },
  rail: {
    backgroundColor: APP_BLACK,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  stream: {
    display: "flex",
    flexDirection: "column",
    padding: 0
  },
  card: {
    alignItems: "center",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    margin: 0,
    padding: 40, paddingLeft: 60, paddingRight: 60
  },
  sectionHeader: {
    color: APP_WHITE,
    fontFamily: "Oswald",
    fontWeight: 900,
    lineHeight: "300px"
  },
  quoteContainer: {
    marginLeft: "auto", marginRight: "auto"
  },
  quoteTextContainer: {
    alignItems: "center",
    backgroundColor: APP_RED,
    display: "flex",
    justifyContent: "center",
    minHeight: 300,
    padding: 50
  },
  quoteAttributionContainer: {
    alignItems: "center",
    backgroundColor: APP_WHITE,
    display: "flex",
    justifyContent: "center",
    minHeight: 300,
    padding: 50
  }
}

class App extends Component {
  render() {
    return (
      <div className="App container-fluid" style={styles.container}>
        <Section noHeader={true}>
          <Row>
            <div className="col-md-12 d-flex" style={styles.headerContainer}>
              <H1><span style={styles.hi}>Hi</span>, <H1>I'm Clayton.</H1></H1>
              <H4>I'm a <A href="https://github.com/claytongentry">software engineer</A> with an eye for design.</H4>
            </div>
          </Row>
        </Section>

        <Poll />

        <Section className="row" title="I vibe with open-source.">
          <div className="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className="d-none d-md-block col-md-5 d-md-flex" style={styles.logoBg}>
              <i className="fab fa-github fa-9x" style={{ color: APP_WHITE }}></i>
            </div>
            <div className="col-md-7" style={styles.openSource}>
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
            </div>
          </div>


        </Section>
        <Section title="I prefer startups">
          <Row>
            <Rail>
              <img src="https://fsmedia.imgix.net/assets/about/header.png?dpr=2&auto=format%2Ccompress&w=160" />
            </Rail>
            <Stream>
              <Card
                color="#f6c200"
                title="Inverse"
                description="Inverse is a media and entertainment company dedicated to sparking curiosity about the future. As a software engineer, my work is oriented toward big data management, testing and content recommendation."
                action={<ActionButton color="#f6c200" href="https://www.inverse.com" value="Visit the Site" />}
              />
            </Stream>
          </Row>

          <Row>
            <Rail>
              <h1>Thimble</h1>
            </Rail>
            <Stream>
              <Card
                color="#f7f7f7"
                title="Thimble"
                description="In college, alongside five good friends, I built a platform to streamline interaction between independent fashion designers and boutique owners. The company did not survive. The friendships did."
              />
            </Stream>
          </Row>



        </Section>
        <Section title="I'm learned">
          <Row>
            <Rail>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Northwestern_Wildcats_logo.svg/1200px-Northwestern_Wildcats_logo.svg.png" height={175} />
            </Rail>
            <Stream>
              <Card
                color={APP_WHITE}
                textColor="#59118e"
                title="Northwestern '17"
              >
                <ul style={{ color: "#59118e", fontFamily: "Oswald", fontWeight: 900, textAlign: "left"}}>
                  <li><p>Degree: B.S. in Journalism from Medill, minor in English Literature</p></li>
                  <li><p>{"GPA: Good. Don't remember exactly. 3.8-something."}</p></li>
                  <li><p>Attendance at <a href="https://www.youtube.com/watch?v=-ozKBuXRGAk" target="_blank">{"College GameDay, Oct. 5, 2013"}</a>: True.</p></li>
                </ul>
              </Card>
            </Stream>

          </Row>

        </Section>
        <Section title="I'm easy to contact.">
          <Row>
            <ContactContainer color="#0077B5" link="https://www.linkedin.com/in/clayton-gentry-6492588a/">
              <i className="fab fa-linkedin-in fa-7x" style={{ color: "white" }}></i>
            </ContactContainer>
            <ContactContainer color={APP_WHITE} link="https://github.com/claytongentry/">
              <i className="fab fa-github fa-7x" style={{ color: APP_BLACK }}></i>
            </ContactContainer>
            <ContactContainer color="#BC32A8" link="https://www.instagram.com/cg3ntry">
              <i className="fab fa-instagram fa-7x" style={{ color: APP_WHITE }}></i>
            </ContactContainer>
            <ContactContainer color={APP_BLACK} link="mailto:cg3ntry@gmail.com">
              <i className="fas fa-envelope fa-7x" style={{ color: APP_WHITE }}></i>
            </ContactContainer>
          </Row>

        </Section>
      </div>
    );
  }
}

const H1 = props =>
  <h1 style={styles.h1}>{props.children}</h1>

const H4 = props =>
  <h4 style={styles.h1}>{props.children}</h4>

const A = props =>
  <a {...props} style={styles.a} target="_blank">
    <span style={styles.underline}>{props.children}</span>
  </a>

const ContactContainer = props =>
  <a
    href={props.link}
    target="_blank"
    className="col-md-3 d-flex"
    style={{ ...styles.contactContainer, backgroundColor: props.color }}
  >
    {props.children}
  </a>


class Poll extends Component {

  render() {
    return (
      <div className="row" style={styles.quoteContainer}>
        <div className="col-md-6" style={styles.quoteTextContainer}>
          <h1 style={{ ...styles.h1, color: APP_WHITE }} className="quote">
            "Clayton is a rock solid engineer, a blast to collaborate with, and just an overall great dude.  That said, flawless hair is an occasional workplace distraction."
          </h1>
        </div>
        <div className="col-md-6" style={styles.quoteAttributionContainer}>
          <a href="https://www.linkedin.com/in/stevemarshall/" target="_blank">
            <h1 style={styles.h1}>
              -Steve Marshall
            </h1>
            <p style={{ color: APP_BLACK }}>
              Product Designer, Co-Founder at Inverse & Sports Bet Collective
            </p>
          </a>
        </div>
      </div>
    )
  }
}

const ActionButton = props =>
  <a href={props.href} target="_blank">
    <div style={styles.btn}>
      <p style={{ color: props.color, fontFamily: "Oswald" }}>{props.value}</p>
    </div>
  </a>



class Section extends Component {

  render() {
    return (
      <div style={{ backgroundColor: APP_BLACK, textAlign: "center" }}>
        {this.props.noHeader ? null : <SectionHeader value={this.props.title} />}
        {this.props.children}
      </div>
    )
  }
}

const SectionHeader = props =>
  <div style={{ height: 300 }}>
    <h2 style={styles.sectionHeader}>
      {props.value}
    </h2>
  </div>


const Row = props =>
  <div className="row" style={{ marginLeft: "auto", marginRight: "auto"}}>
    {props.children}
  </div>

const Rail = props =>
  <div className="d-none d-md-block col-md-5 d-md-flex" style={styles.rail}>
    {props.children}
  </div>

const Stream = props =>
  <div className="col-md-7" style={styles.stream}>
    {props.children}
  </div>

class Card extends Component {

  render() {
    const color = this.props.textColor || APP_BLACK

    return (
      <div style={{ ...styles.card, backgroundColor: this.props.color }} className="card">
        <h1 style={{ ...styles.h1, color }}>{this.props.title}</h1>
        <p style={{ ...styles.h1, color }}>
          {this.props.description}
        </p>
        {this.props.action}
        {this.props.children}
      </div>
    )
  }
}

export default App;
