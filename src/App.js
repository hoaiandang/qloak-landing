import React, { useRef, useEffect } from 'react';
import hero from './img/on-iPhone.png';
import pin from './img/pin.png';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import './App.css';
import Page from './components/Page.js'

const content = (<p style={{margin: 20}}>Qloak</p>)
const children = (<p style={{margin: 20}}>(^.^)/</p>)

const rowContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const buttonStyle = {
  backgroundColor: '#01B0A5',
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


const App = () => {
  const PageOne = (
    <div className='column-container'
      style={{height: '40vh',
              justifyContent: 'space-around',
              alignItems: 'flex-start'}}>
      <div className='column-container' style={{alignItems: 'flex-end'}}>
        <div className='row-container'>
          <h1 >Qloak</h1><h1 style={{color: '#01B0A5'}}>.</h1>
        </div>
        <div className='row-container'>
          <h4 style={{margin: 0}}>Find your place</h4>
          <img src={pin} className='pin'/>
        </div>
      </div>
      <div className='row-container'>
        <a href="#subscribe" className='button'>Sign Up</a>
        <a href="#learn-more" className='button'>Learn More</a>
      </div>
    </div>
  )

  const HeroOne = (
    <img src={hero} className="hero-one" alt="phone screen" />
  )

  const PageTwo = (
      <div  className='text-box'>
        <h2>Build community in spaces that support you.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</p>
      </div>
  )

  const PageThree = (
      <div className='text-box'>
        <h2>Get connected.</h2>
        <p>Whether you are looking for a place to play, eat, shop,
          manage your health, or find employment, we have you covered.</p>
      </div>
  )

  const PageFour = (
      <div className='text-box'>
        <h2>Our Mission.</h2>
        <p>Creating one central hub of
        queer friendly spaces. Promoting
        inclusion for LQBTQ+ identified
        folx. Amplifying the voices in our
        community. Increasing visibility of
        the resources that our users need
        the most. Keeping it local.</p>
      </div>
  )

  const PageFive = (
      <div className='text-box'>
        <h2>Queer. Local. Qloak.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</p>
      </div>
  )

  const Subscription = (
    <div id='subscribe'>
      <form className='row-container' style={{alignItems: 'flex-end'}}>
        <div>Newsletter</div>
        <input type="text" placeholder='Email'></input>
        <submit className='button2'>Subscribe</submit>
      </form>
    </div>
  )

  const Social = (
    <div id='social-bar' className='row-container'>
      <a href="/" target='_blank'><img className='social' src={twitter}/></a>
      <a href="/" target='_blank'><img className='social' src={instagram}/></a>
      <a href="/" target='_blank'><img className='social' src={facebook}/></a>
    </div>
  )

  const Footer = (
    <div id='footer' className='row-container' style={{justifyContent: 'space-between'}}>
      <div className='column-container' style={{alignItems: 'flex-start'}}>
        <div className='row-container' style={{justifyContent: 'flex-start'}}>
          <h3 style={{color: 'white'}}>Qloak</h3><h3 style={{color: '#01B0A5'}}>.</h3>
        </div>
        <div className='text-box' style={{color: 'white'}}>
          <div>Have questions?</div>
          <div>Contact us at info@qloakapp.com</div>
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
        <page id="learn-more" //ref={learnRef}
          style={{backgroundColor: '#F7F5F2'}}>{PageTwo}</page>
        <page>{PageThree}</page>
        <page style={{backgroundColor: '#F7F5F2'}}>{PageFour}</page>
        <page>{PageFive}</page>
        {Subscription}
        {Footer}
      </div>
  );
}







export default App;
