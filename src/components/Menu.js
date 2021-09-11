import React from 'react';
import Logo from '../../src/Assets/logo.png';
import rect from '../../src/Assets/rect_menu.jpg';
import tel from '../../src/Assets/tel.png';
import { NavLink } from 'react-router-dom';
import './menu.css';



    const Menu = (props) => (
        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<img src={rect} alt="logo du site"  className="rect"/>
  <NavLink className="navbar-brand" to="/" exact>
  <img src={Logo} alt="logo du site" className="logo"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      
    <div class="btn-group rubrique-title">
<button type="button" class="btn btn-default apropos"><NavLink to="/apropos" exact className="nav-link">A propos</NavLink></button>


<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    <span class="caret"></span>
 <span class="sr-only">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
   <li><NavLink to="/quisommesnous" exact className="nav-link">Qui Somme nous</NavLink></li>
   <li><NavLink to="/expertise" exact className="nav-link">Expertise</NavLink></li>
   <li><NavLink to="/domainedapplication" exact className="nav-link">Domainedapplication</NavLink></li>
   
  
   
</ul>
</div>

   
      <div class="btn-group rubrique-title">

<button type="button" class="btn btn-default"><NavLink to="/services" exact className="nav-link">Services</NavLink></button>


<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    <span class="caret"></span>
 <span class="sr-only">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
   <li><NavLink to="/etude" exact className="nav-link">Etude</NavLink></li>
   <li><NavLink to="/installation"exact className="nav-link">Installation</NavLink></li>
   <li><NavLink to="/maintenance"exact className="nav-link">Maintenance</NavLink></li>
   <li><NavLink to="/controle"exact className="nav-link">Controle</NavLink></li>
  
   
</ul>
</div>




      <div class="btn-group rubrique-title">

  <button type="button" class="btn btn-default"><NavLink to="/ingennierie" exact className="nav-link">Ingennierie</NavLink></button>


  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    <span class="caret"></span>
   <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
     <li><NavLink to="/thermique"  className="nav-link">Thermique</NavLink></li>
     <li><NavLink to="/frigorifique"  className="nav-link">Frigorifique</NavLink></li>
     <li><NavLink to="/calorifugeage" className="nav-link">Calorifugeage</NavLink></li>
     <li><NavLink to="/aeraulique"  className="nav-link">Aeraulique</NavLink></li>
     <li><NavLink to="/acoustique" className="nav-link">Acoustique</NavLink></li>
     
  </ul>
</div>

<div class="btn-group rubrique-title">

<button type="button" class="btn btn-default"><NavLink to="/qhse" className="nav-link">GHSE</NavLink></button>


<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    <span class="caret"></span>
 <span class="sr-only">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
   <li><NavLink to="/hse" className="nav-link">HSE</NavLink></li>
   <li><NavLink to="/qualite" className="nav-link">Qualite</NavLink></li>

  
   
</ul>
</div>  
      

      <li className="nav-item rubrique-title" id="projet">
        <NavLink to="/projet" exact className="nav-link" exact>Projet</NavLink>
      </li>
      
      <li className="nav-item rubrique-title" id="contact">
      <NavLink to="/contact" exact className="nav-link" exact>Contact</NavLink>
      </li>
      
    </ul>
  </div>
  </div> 
  <div className="tel">
  <div className="icon-tel"><img src={tel} alt="tel"/></div>
  <div className="txt-tel">24 21 21 94</div>
  </div>
</nav>
    );

export default Menu;