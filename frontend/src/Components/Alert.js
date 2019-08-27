import React, { Component } from 'react';
import '../App.css';

class Alert extends Component{

al=()=>
   {
      alert('SCG');

   }

 

  render() 
  {
    return (
      <div>


      <br/><button class="btn btn-primary btn-lg" onClick={this.al}>Click Me</button>
      
      
       </div>

            )}
}

export default Alert;
