import React from 'react';
import '../App.css';

function Page(props) {
  const pageStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    color: '#707070',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: props.color,
    fontFamily: 'Ubuntu',
    fontSize: 80,
    fontWeight: 'bold',

  }
  const colorStyle = {
    backgroundColor: props.color,
  }
  return (
    /*
    <div style={pageStyle}>
      {props.content}
      {props.children}
    </div>
    */
    <div className='page' style={colorStyle}>
      {props.content}
      {props.children}
      {props.img}
    </div>
  );
}

/*
const Page = (props) => (
  <div style={{backgroundColor: props.color}}>
    {props.content}
    {props.children}
  </div>
)
*/

export default Page
