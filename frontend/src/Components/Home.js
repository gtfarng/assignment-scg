import React from 'react';
import '../App.css';
import react from '../logo.svg';

function Home() {

  const  home=()=>
     {
        alert('WELCOME!!!');
     }
     home();
  return (
    <div className="App">
  <br/>
      <br/><h1>Welcome!!!</h1>
        <br/>

        <img src={react} className="App-logo" width="40%" alt="react" />

        <br/><a href="https://reactjs.org/docs/getting-started.html"><h5>React.JS (FrontEnd)</h5></a>

        <img src="https://miro.medium.com/max/1260/1*pxfq-ikL8zPE3RyGB2xbng.png" width="40%"  alt="node" />
        <br/><a href="https://nodejs.org/en/docs"><h5>Node.JS (BackEnd)</h5></a>
    </div>
  );
}

export default Home;
