import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Backend from './Components/Backend'
import Frontend from './Components/Frontend'
import Index from './Components/Index'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <br/><h1>ASSIGNMENT</h1>
      <br/></header><br/>

      <Router>
      <div>
        <nav><h5>
              <Link to="/"> Home</Link> |
              <Link to="/index"> INDEX</Link> |
              <Link to="/api/"> API</Link> |
              <Link to="/web/"> WEB</Link> |
       </h5> </nav>

        <Route path="/" exact component={Home} />
        <Route path="/index/" component={Index} />
        <Route path="/api/" component={Backend} />
        <Route path="/web/" component={Frontend} />
      </div>
    </Router>

<div>

</div>

<footer class="page-footer font-small blue pt-4">

  <div class="footer-copyright text-center py-3">Copyright © 2019 :
    <a href="mailto:jatupat.pn@gmail.com"> Jatupat.pn@gmail.com</a>
  </div>

</footer>

    </div>
  );
}

export default App;
