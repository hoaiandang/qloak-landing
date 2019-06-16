import React from 'react';
import hero from './img/on-iPhone.png';
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

const App = () => (

    <div className="App" /*style={{marginTop: -20}}*/>
      <Page img={HeroOne}>{PageOne}</Page>
      <Page color={('#F7F5F2')}>{PageTwo}</Page>
      <Page>{PageThree}</Page>
      <Page color={('#F7F5F2')}>{PageFour}</Page>
      <Page>{PageFive}</Page>
      {Subscription}
      {Footer}
    </div>

    /*
    <div>
      <div className="page">slfdjkllksdljkfsdkljsf;lkaja;lsdfjl;ksdjfl;kjsdaf;ljafl;jfdl;kjfks</div>
      <div className='page'>sldffld</div>
      <div className="page"/>
      <div className="page"/>
    </div>
    */
);

const PageOne = (
  <div className='column-container'
    style={{height: '50vh',
            justifyContent: 'space-around',
            alignItems: 'flex-start'}}>
    <div>
      <div style={rowContainer}>
        <h1 >Qloak</h1><h1 style={{color: '#01B0A5'}}>.</h1>
      </div>
      <h6 style={{margin: 0}}>Find your place</h6>
    </div>
    <div style={rowContainer}>
      <div className='button'>Sign Up</div>
      <div className='button'>Learn More</div>
    </div>
  </div>
)

const HeroOne = (
  <img src={hero} className="hero-one" alt="phone screen" />
)

const PageTwo = (
    <div className='text-box'>
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
  <div id='subscription'>
    <form className='row-container' style={{alignItems: 'flex-end'}}>
      <div>Newsletter</div>
      <input type="text" value='Email'></input>
      <submit className='button2'>Subscribe</submit>
    </form>
  </div>
)

const Footer = (
  <div id='footer'>
  </div>
)




export default App;
