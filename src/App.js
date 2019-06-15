import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page.js'

const content = (<p style={{margin: 20}}>Qloak</p>)
const children = (<p style={{margin: 20}}>(^.^)/</p>)

const App = () => (
    <div className="App">
      <Page content={content} children={children}/>
      <Page color={('#F7F5F2')}/>
      <Page content={content} children={children}/>
      <Page color={('#F7F5F2')}/>
      <Page content={content} children={children}/>
    </div>
);


export default App;
