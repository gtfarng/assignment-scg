import React from 'react';
import {Link } from "react-router-dom"
import '../App.css';

function Assignment() {
  return (
    <div className="App"><br/>
<h3><Link to="/backend"><strong>Backend</strong></Link></h3>
    <h5>
    - Create a new controller called “<a href="https://scg-called.glitch.me/API/scg">SCG</a>”
<br/>- X, 5, 9, 15, 23, Y, Z - Please create a new <a href="https://function-finding.glitch.me/function/5/9/15/23">function</a> for finding X, Y, Z value
<br/>- Please use “Place search|Place API(by Google)” for finding all restaurants in Bangsue
area and show result by JSON
<br/>- Please create one small project for Line messaging API(Up to you), contain a flow
diagram, your code, and database.</h5>


<br/><h3><Link to="/frontend"><strong>Frontend</strong></Link></h3>
    <h5>
    - Create a new router called “<Link to="/scg">SCG</Link>”
<br/>- X, 5, 9, 15, 23, Y, Z - Please create a new <Link to="/function">function</Link> for finding X, Y, Z value
<br/>- Please use <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap</a> V4 for CSS
<br/>- Please create Top bar, body, and footer for every page components
<br/>- Please create a new page for showing results from your API(1.3)
<br/>- One simple static page for your <Link to="/about/cv">CV</Link>

</h5>

    </div>
  );
}

export default Assignment;
