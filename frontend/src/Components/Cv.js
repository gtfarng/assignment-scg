import React from 'react';
import '../App.css';
import work from '../work.png';
import edu from '../edu.png';
import cont from '../cont.png';
import oth from '../other.png';
import Education from '../img/education.png'
import Contact from '../img/contact.png'
import Works from '../img/work.png'
import Others from '../img/other.png'

function Cv() {

  const  index=()=>
     {
        alert('WELCOME!!! to CV');
     }
     index();
  return (
    <div className="App">
  <br/>
      <br/>

        <div class="container card p-3 mb-2 bg-light text-dark">
        <br/>
  <div class="card-body ">
    <h1 class="card-title display-3">About Me</h1>
    <p class="card-subtitle mb-2 text-muted">This page is my CV</p>  <br/>

  </div>
</div>

<br/>

<div class="container card mb-3 bg-light text-dark ">
  <div class="row no-gutters">
    <div class="col-md-4" >
<div width="" >
      <img src="https://raw.githubusercontent.com/gtfarng/resume/master/PRO_HD.JPG?token=AGKXIQTQ55XDHYIXCSREPAK5NZHYW" class="card-img pro" alt="profile" align="center"  />
</div>
    </div>
    <div class="col-md-8">
      <div class="card-body" align="center">
        <h2 class="card-title">Mr.Jatupat Pannoi</h2>
        <h4 class="card-title"><small>Programmer/Developer</small></h4>
        <h6 class="card-text text">My name is Jatupat Pannoi from Computer Engineering Department, Faculty of Engineering, Prince of Songkla University (PSU), Phuket Campus. I was born in Phitsanulok, Thailand. I am a Network Engineer since 2019. I graduated with my bachelor degree from Phuket.</h6>

      </div>
    </div>
  </div>
</div>

<div class="container">

<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header p-3 mb-2 bg-info text-white" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link text-light" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h5> <img src={cont} alt="work"  class="icon" /> CONTACT</h5>
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
          <img src={Contact} alt="Contact" />
      </div>
    </div>
  </div>
<br/>



  <div class="card">
    <div class="card-header p-3 mb-2 bg-info text-white" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed text-light" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<h5>  <img src={edu} alt="work"  class="icon" />    EDUCATION</h5>
        </button>
        <br/>


      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      <img src={Education} alt="Education" />
      </div>
    </div>
  </div>

<br/>


  <div class="card">
    <div class="card-header p-3 mb-2 bg-info text-white" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed text-light" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>   <img src={work} alt="work"  class="icon" /> WORK EXPERIENCE</h5>
        </button>
      </h2>
    </div>

    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      <img src={Works} alt="works" />
      </div>
    </div>
  </div>
<br/>
  <div class="card">
    <div class="card-header p-3 mb-2 bg-info text-white" id="headingFour">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed text-light " type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <h5> <img src={oth} alt="work"  class="icon" /> OTHERS</h5>
        </button>
      </h2>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
        <img src={Others} alt="works" />
      </div>
    </div>
  </div>

</div>
</div>



    </div>
  );
}

export default Cv;
