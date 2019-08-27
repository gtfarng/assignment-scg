import React from 'react';
import Funct from './Funct'
import '../App.css';

function Function() {

  const  index=()=>
     {
        alert('Function');
     }
     index();
  return (
    <div className="App">
  <br/>
      <br/><h3>Function for finding X, Y, Z value</h3>
        <br/>

<Funct />
    </div>
  );
}

export default Function;


