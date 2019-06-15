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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'Ubuntu',
    color: '#707070',
  }
  return (
    /*
    <div style={pageStyle}>
      {props.content}
      {props.children}
    </div>
    */
    <div className='page'>
      {props.content}
      {props.children}
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