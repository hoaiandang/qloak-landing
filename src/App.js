import React from 'react';
import logo from './logo.svg';
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

const PageOne = (
  <div className='column-container'
    style={{height: '50vh',
            justifyContent: 'space-around',
            alignItems: 'flex-start'}}>
    <div>
      <div style={rowContainer}>
        <h1 >Qloak</h1><h1 style={{color: '#01B0A5'}}>.</h1>
      </div>
      <h5 style={{margin: 0}}>Find your place</h5>
    </div>
    <div style={rowContainer}>
      <div className='button'>Sign Up</div>
      <div className='button'>Learn More</div>
    </div>
  </div>)

const App = () => (

    <div className="App">
      <Page>{PageOne}</Page>
      <Page color={('#F7F7F7')}></Page>
      <Page content={content}/>
      <Page color={('#F7F7F7')}/>
      <Page content={content}/>
      <Page color={('#F7F7F7')}/>
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


export default App;
