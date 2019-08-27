import React, { Component } from 'react';
import '../App.css';

class Funct extends Component{

  state = { count:0,x:'X',y:'Y',z:'Z',n1:5,n2:9,n3:15,n4:23 }

   
   cal = () =>
  {
      let d1=this.state.n2-this.state.n1
      let d2=this.state.n3-this.state.n2
      let d3=this.state.n4-this.state.n3
      let d=d2-d1
      let d4=d3+d
      let d5=d4+d
    this.setState({x:this.state.n1-d,y:this.state.n4+d4,z:this.state.n4+d4+d5})
  }
  reset = () =>
  {
    this.setState({x:'X',y:'Y',z:'Z'})
  }

  render() 
  {
    return (
      <div>

      <h4><strong>{this.state.x}</strong> ,{this.state.n1} ,{this.state.n2} ,{this.state.n3} ,{this.state.n4} ,<strong>{this.state.y}</strong> ,<strong>{this.state.z}</strong></h4>
      <br/>

      <br/><button class="btn btn-success" onClick={this.cal}>Calculate</button>
      <button class="btn btn-danger" onClick={this.reset}>Reset</button>
      <br/>
      
       </div>

            )}
}

export default Funct;