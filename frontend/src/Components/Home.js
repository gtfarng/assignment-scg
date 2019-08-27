import React from 'react';
import '../App.css';
import logo from '../logo.svg';

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

        <img src={logo} className="App-logo" alt="logo" />

        <br/><h5>React.JS (FrontEnd)</h5>
    </div>
  );
}

export default Home;
