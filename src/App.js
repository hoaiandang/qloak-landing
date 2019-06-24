import React, { useRef, useEffect } from 'react';
import hero from './img/on-iPhone.png';
import hero2 from './img/on-iPhone-2.png';
import polaroids from './img/polaroids.png';
import pin from './img/pin.png';
import california from './img/california.png';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import team from './img/team.png';
import './App.css';

/*
const mongodb = require("mongodb");

var CONTACTS_COLLECTION = "contacts";
const uri = "mongodb+srv://qloak:bigqloakideas@cluster0-lbws3.azure.mongodb.net/test?retryWrites=true&w=majority";

var db;
mongodb.MongoClient.connect(uri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database.db(CONTACTS_COLLECTION);
  console.log("Database connection ready");
  //console.log(db);

  // Initialize the app.

  var mongoServer = server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on http://localhost:${port}`);
    var serverPort = mongoServer.address().port;
    console.log("App now running on port", serverPort);
  });


});
*/


const content = (<p style={{margin: 20}}>Qloak</p>)
const children = (<p style={{margin: 20}}>(^.^)/</p>)

const rowContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const buttonStyle = {
  backgroundColor: '#038088',
  color: 'white',
  fontFamily: 'Ubuntu',
  fontSize: 20,
  fontWeight: 'bold',
  padding: 10,
  paddingLeft: 40,
  paddingRight: 40,
  margin: 10,
  borderRadius: 40,
}


//const App = () => {

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value == '') {
      alert('Please enter your email.');
    } else {
      fetch('/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.state.value })
      })
      alert('Thank you for subscribing!');
    }
    event.preventDefault();
  }

  render() {
    const PageOne = (
      <div className='column-container'
        style={{height: '40vh',
                justifyContent: 'space-around',
                alignItems: 'flex-start'}}>
        <div id='qloak' className='column-container' style={{alignItems: 'flex-end'}}>
          <h1 id='qloak' >Qloak.</h1>
          <div className='row-container' id='fyp'>
            <h4 style={{margin: 0}}>Find your place</h4>
            <img src={pin} className='pin'/>
          </div>
        </div>
        <div className='row-container'>
          <a href="#subscribe" className='button'>Sign Up</a>
          <a href="#learn-more" className='button button-sub'>Learn More</a>
        </div>
      </div>
    )

    const HeroOne = (
      <img src={hero} id="hero-one" alt="phone screen" />
    )

    const PageTwo = (
        <div  className='text-box'>
          <h2 style={{color: '#038088'}}><i style={{color: '#F1C232'}}>
            Finally</i>, queer friendly spaces housed on one platform.
            Find your place.</h2>
        </div>
    )

    const HeroTwo = (
        <img src={hero2} id="hero-two" alt="phone screen" />
    )

    const PageThree = (
        <div className='text-box' id='page-three'>
          <h2 >Get connected.</h2>
          <ul>
            <l>Whether you are looking for a place to play, eat, shop,
              manage your health, or find employment, we have you covered.</l>
            <l>Play- events, venues, bars and collectives</l>
            <l>Eat- restaurants, coffee shops, pop-ups</l>
            <l>Shop- retailers, vendors, independent makers</l>
            <l>Work- job opportunities that are equipped to support LGBTQ+ folx</l>
            <l>Health-  mental health support, physical fitness, primary care doctors, etc.</l>
          </ul>
        </div>
    )

    const HeroThree = (
      <div>
        <div className='row-container' style={{flexWrap: 'wrap'}}>
          <box>
            <box-title>Individuality matters.</box-title>
            <box-text>Choose search filters based on your own remarkable
              identity </box-text>
          </box>
          <box>
            <box-title><div>Your voice </div><div>matters.</div></box-title>
            <box-text>Share your experiences and submit recommendations for
              LGBTQ+ friendly listings in your area.</box-text>
          </box><box>
            <box-title>Our community matters.</box-title>
            <box-text>Support spaces doing good work for the LGBTQ+
              community.</box-text>
          </box>
        </div>
    </div>
    )

    const PageFour = (
        <div className='text-box'>
          <h2 style={{color: '#038088'}}>Our Mission.</h2>
          <p>The queer community is unique, diverse, and important, and every
            person deserves a safe space to be themselves. We believe in
            creating a platform that enables individuals to find a place that
            support their own remarkable identity.
          </p>
          <p>
            Qloak’s mission is to raise the wellbeing of the
            LGBTQ+ community by centralizing information about queer inclusive
            spaces on one <i style={{color: '#038088'}}>free</i> user friendly platform.
          </p>
        </div>
    )

    const HeroFour = (
      <img src={polaroids} id="hero-four" alt="hands together" />
    )

    const PageFive = (
        <div className='text-box' id='qlq'>
          <h2>Queer. Local. Qloak.</h2>
          <p>Stay tuned for more exciting updates!</p>
        </div>
    )

    const HeroFive = (
        <img src={california} id="hero-five" alt="destination pin" />
    )

    const Subscription = (
      <div id='subscribe'>
        <form id='email-container' style={{flexWrap: 'wrap'}}
          onSubmit={this.handleSubmit}>
          <div>Newsletter</div>
          <input type="text" placeholder='Email' onChange={this.handleChange}/>
          <input type="submit" className='button2' value="Subscribe"/>
        </form>
      </div>
    )

    const Social = (
      <div id='social-bar' className='row-container'>
        <a href="https://twitter.com/Qloakapp" target='_blank'><img className='social' src={twitter}/></a>
        <a href="https://www.instagram.com/Qloak.app/" target='_blank'><img className='social' src={instagram}/></a>
        <a href="https://www.facebook.com/pg/Qloak-402642527005313/about/?ref=page_internal" target='_blank'><img className='social' src={facebook}/></a>
      </div>
    )

    const Footer = (
      <div id='footer' className='row-container' style={{justifyContent: 'space-between'}}>
        <div className='column-container' style={{alignItems: 'flex-start'}}>
          <div className='row-container' style={{justifyContent: 'flex-start'}}>
            <h3 style={{color: 'white'}}>Qloak</h3><h3 style={{color: '#FFD84D'}}>.</h3>
          </div>
          <div className='text-box' id='footer-text' style={{color: 'white'}}>
            <div>Have questions?</div>
            <div>Contact us at <a href="mailto:info@qloakapp.com">info@qloakapp.com</a></div>
          </div>
        </div>
        {Social}
      </div>
    )

    return (
        <div className="App">
          <page /*height='98vh'*/>
            {PageOne}
            {HeroOne}
          </page>
          <div className='column-container' style={{justifyContent: 'flex-start'}}>
            <page className='column-container' id="learn-more" style={{backgroundColor: '#F7F5F2'}}>
              {PageTwo}
              {HeroThree}
            </page>
            <blue/>
          </div>
          <page id='page-three-container' style={{backgroundColor: 'none'}}>
            {HeroTwo}
            {PageThree}
          </page>

          <page style={{backgroundColor: '#F7F5F2'}} id='page-four-container'>
            {HeroFour}
            {PageFour}
          </page>
          <page id='page-five-container'>
            {PageFive}
            {HeroFive}
          </page>
          {Subscription}
          {Footer}
        </div>
    );
  }
}



export default App;
