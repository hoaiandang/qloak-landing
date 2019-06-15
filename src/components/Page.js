import React from 'react';

function Page(props) {
  const pageStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: props.color
  }
  return (
    <div style={pageStyle}>
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
